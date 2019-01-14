import Api from "@/services/Api.js"

export default { 
  work(){
    // console.log("service data: ", data)
    return Api().get("work")
  }
}