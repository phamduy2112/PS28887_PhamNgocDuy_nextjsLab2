import axios from "axios";

const local='http://localhost:8080';
export const src=`http://localhost:8080/public/img`
export async function getDataCate(){
    const res=await fetch(`${local}/categories`,{cache:'no-cache'});
    return res.json();
  }
export async function getDataProducts(){
    const res=await fetch(`${local}/products`,{cache:'no-cache'});
    return res.json();
  }
export async function getHotDataProducts(){
    const res=await fetch(`${local}/products-hot`,{cache:'no-cache'});
    return res.json();
  }
export async function getDiscountDataProducts(){
    const res=await fetch(`${local}/products-discount`,{cache:'no-cache'});
    return res.json();
  }
export async function getDataProductsByCate(idCate){
    const res=await fetch(`${local}/productbycate/${idCate}`,{cache:'no-cache'});
    return res.json();
  }
  
  
export async function getDataProductsById(id){
    const res=await fetch(`${local}/product-detail/${id}`,{cache:'no-cache'});
    return res.json();
  }
export async function getSearchProduct(key){
  const res=await axios.get(`${local}/search/${key}`,{cache:'no-cache'});
    return res.data;
}

export async function loginAPI(model) {
  try {
      const response = await axios.post(`${local}/log-in`, model,{cache:'no-cache'});
      return response.data; // Trả về dữ liệu từ phản hồi của API
  } catch (error) {
      throw error; // Ném lỗi nếu có lỗi xảy ra trong quá trình gọi API
  }
}
export async function signIn(model) {
  try {
      const response = await axios.post(`${local}/sign-in`, model,{cache:'no-cache'});
      return response.data; // Trả về dữ liệu từ phản hồi của API
  } catch (error) {
      throw error; // Ném lỗi nếu có lỗi xảy ra trong quá trình gọi API
  }
}



