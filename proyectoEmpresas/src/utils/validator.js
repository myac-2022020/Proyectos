import { compare, hash } from 'bcrypt'

export const encrypt = (password)=>{
    try {
        return hash(password, 10)
    } catch (err) {
        console.error(err);
    }
}

export const checkPassword = async(password, hash)=>{
    try {
        return await compare(password, hash)
    } catch (err) {
        console.error(err);
    }
}

export const checkUpdate = (data, userId)=>{
    if(userId){
        if(
            Object.entries(data).length === 0 ||
            data.username ||
            data.username == 0 ||
            data.password ||
            data.password == 0 ||
            data.role ||
            data.role == 0 
    )return false
        return true
    }else{
        return false
    }        
}