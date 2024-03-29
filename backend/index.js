
// var express = require('express')

import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { auth } from './authMiddleware.js'
import { PORT } from './config.js'
import {dbURL} from './config.js'
import mongoose from 'mongoose'
import { User } from './models/userModel.js' 

let app = express()

//to parse the body

app.use(express.json())

//to unblock cors

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello i am from server updated')
})

//Route for create user in db

app.post('/signup', async(req, res) => {
  try {
    let { username, email, password, confirmpassword } = req.body
    console.log(req.body)
    if (!username ||
      !email ||
      !password ||
      !confirmpassword) {
      return res.status(400).send('Required username, email, password, confirm password')
    }

    if (password !== confirmpassword) {
      return res.status(400).send('Passwords Not Matched')
    } 

    let newUser = {
      username,
      email,
      password,
      confirmpassword
    }

    let emailExist = await User.findOne({ email })
    
    if (emailExist) {
      return res.status(400).send('User already exist in DB')
    }

    let user = await User.create(newUser)
    return res.status(201).send('User is created successfully')
    
  } catch (error) {
  return  res.status(500).send('Internal Server Error')
  }
})

//Route for user login

app.post('/login', async(req, res) => {
  try {
    let { email, password } = req.body
    console.log(req.body)
    
    if (!email || !password) {
      return res.status(400).send('Required email and password')
    }

    let existUser = await User.findOne({ email })
    console.log(existUser)
   
    if (!existUser) {
      return res.status(404).send('User not found')
    } 
    if (existUser.password !== password) {
      return res.status(400).send('Invalid credentails')
    }
    
    if (existUser.email && existUser.password) {
     
      let token = jwt.sign({ id: existUser._id }, 'secret', { expiresIn: '1d' })
        console.log('login:', token)
      return res.json({token, userID:existUser._id })
    }
    
  } catch (error) {
    res.status(500).send('Internal server error')
  }
})


//Route for accessing user profile

app.get('/profile',auth, async(req, res) => {
  try {
    let exist = await User.findById(req.id)
    console.log('user from db after auth:', exist)
    if (!exist) {
      return res.send('User not found')
    } else {
      return res.json(exist)
    }
    
  } catch (error) {
   return res.status(500).send('Internal server error')
  }
  
})


mongoose.connect(dbURL)
  .then(() => {
    console.log('DB CONNECTED SUCCESSFULLY')
    app.listen(PORT, () => {
      console.log(`SERVER STARTED IN PORT ${PORT}`);
    });
    
})
.catch()


