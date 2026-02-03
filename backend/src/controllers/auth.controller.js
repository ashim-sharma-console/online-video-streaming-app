
//require user path:=
const userModel = require('../models/user.model')

//require Foodpatner Path:=
const foodPartnerModel = require('../models/foodpartner.model')

//use for password:=
const bcrypt = require('bcryptjs')

//use for token
const jwt = require('jsonwebtoken')


//register User Controler:=

async function registerUser(req, res) {

    const { fullName, email, password } = req.body

    const isUserAlreadyExists = await userModel.findOne({ email })

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exist"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })
    //create Token:=
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    //save
    res.cookie('token', token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })


}


//Login User Controler:=
async function loginUser(req, res) {

    const { email, password } = req.body;// remove
    console.log(body)

    const user = await userModel.findOne({
        email
    })
// 
    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }
console.log(user)
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    //create token:=
    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    //data save:=
    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in Successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })

}

//LogOut User Controler:=
function logoutUser(req, res) {
// get user id from req.user
// remove refresh token from db
// clear cookies
// sed response
// $unset mongoDB pot.
// $or
//
//console.log("Ueser logged out Successfully")
    res.clearCookie('token');
    res.status(200).json({
        message: "Ueser logged out Successfully"
    })

}


//.........................................


//Register FoodPatner:=
async function registerFoodPartner(req, res) {

    const { fullName,contactName, email, phone,password,address, } = req.body;

    const isAccountAlreadyExists = await foodPartnerModel.findOne({ email })

    if (isAccountAlreadyExists) {
        return res.status(400).json({
            message: "Food partnet account already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const foodPartner = await foodPartnerModel.create({
        fullName,
        contactName,
        email,
        phone,
        password: hashedPassword,
        address,
    })

    //create token:=
    const token = jwt.sign({
        id: foodPartner._id
    }, process.env.JWT_SECRET)

    //save
    res.cookie('token', token)

    res.status(201).json({
        message: "Food partner registered successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            fullName: foodPartner.fullName,
            phone: foodPartner.phone,
            address: foodPartner.address,
            contactName: foodPartner.contactName    
        }
    })
}

//Login Food Partner:
async function loginFoodPartner(req, res) {

    const { email, password } = req.body;

    const foodPartner = await foodPartnerModel.findOne({
        email
    })

    if (!foodPartner) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }

    //create token:=
    const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRET)

    //data save:=
    res.cookie("token", token)

    res.status(200).json({
        message: "Food Partner logged in Successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,
            fullName: foodPartner.fullName
        }
    })
}

//logoutFood PArtner:-
function logoutFoodPartner(req, res) {


    res.clearCookie('token');
    res.status(200).json({
        message: "Food Partner logged out Successfully"
    })

}


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}