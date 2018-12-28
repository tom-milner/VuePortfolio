import Api from "@/services/Api.js"

export default { 
  contact(data){
    console.log("service data: ", data)
    return Api().post("contact", data)
  }
}