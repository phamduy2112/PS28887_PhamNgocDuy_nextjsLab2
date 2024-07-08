import React from 'react'
import '/public/css/gioHang.css'
import { MdDelete } from 'react-icons/md'
import { LuMinus } from 'react-icons/lu'
import { FaPlus } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'

function gioHang() {
  return (
   <main className="container">
  <h3 className="text-center my-4 text-[25px] font-medium">Giỏ Hàng</h3>
  <div className="cart flex gap-3">
    <div className="cart-left" style={{width:'80%'}}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center text-white py-2">Sản Phẩm</th>
            <th scope="col" className="text-center text-white">Giá</th>
            <th scope="col" className="text-center text-white">Số Lượng</th>
            <th scope="col" className="text-center text-white">Thành Tiền</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          <tr className=''>
            <td>
              <div className="product-cart flex gap-2 p-2">
                <img src="https://product.hstatic.net/1000096703/product/1_d4c95fe0dc8a47e28b0b3d3083498997_master.jpg" alt />
                <div className="product-cart__text">
                  <h6>Sơ Mi Nam Trắng Vải Lụa Dày
                  </h6>
                  <p className='text-blue-800 font-medium'>3.000.000đ</p>
                </div>
              </div>
            </td>
            <td className="text-center font-medium">3.000.000đ</td>
            <td className="text-center">
              <div className="soLuong flex justify-center items-center">
                <div className="tru">
                <LuMinus />

                </div>
                <div className="number">
                  1
                </div>
                <div className="cong">
                <FiPlus />


                </div>
              </div> 
            </td>
            <td className="text-center text-red-600 font-medium">3.000.000đ</td>
            <td className="text-center text-[22px]"><MdDelete />
            </td>
          </tr>
     
        </tbody>
      </table>
    </div>
    <div className="cart-right" style={{width: 400,background:"white"}}>
      <div className="bg-white">
        <h4 className="text-center text-[22px] font-semibold">Giỏ Hàng Của Bạn</h4>
        <div>
          <p className="flex justify-between">Số lượng: <span className="fw-bold">1</span></p>
          <p className="flex justify-between">Thành tiền:
            :<span className="fw-bold">11.310.000đ
            </span></p>
        </div>
        <p className="flex justify-between">Khuyến mãi:
          : <span className="fw-bold">1</span></p>
        <p className="flex justify-between">Giao hàng:
          : <span className="fw-bold">1</span></p>
        <p className="flex justify-between">Tổng thanh toán:
          : <span className="fw-bold text-danger">11.300</span></p>
          <button className="btn btn-info mt-2 w-[100%] h-[35px] rounded-lg">
          <a href="" >Mua Ngay</a>
          </button>
        
      </div>
    </div>
  </div>
</main>

  )
}

export default gioHang