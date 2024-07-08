"use client";

import React, { useEffect, useState } from "react";
import "../sanPham.css";
import Link from "next/link";
import { getDataProductsByCate, src } from "@/app/api/fetchApi";
function SanPham({ params }: any) {
  const [data, setData] = useState([]);

  const id = params.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataProductsByCate(id);
        if (response.message == "Thành công !") {
          setData(response.content);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(); // Gọi hàm fetchData() khi component mount
  }, [id]);

  
  return (
    <main className="mt-4">
      <div className="container">
        <div className="products-box">
          <div className="products-left">
            <div className="product-title">
              <h5>Tìm Kiếm</h5>
              <div className="products-left__box  ">
                <p className="mt-1">Sản phẩm</p>
                <div className="products-left__item flex justify-between pt-3">
                  <Link href={`/sanPham?idLoai=${id}&discount=1`}>Sản Phẩm Giảm</Link>
                  <span>11</span>
                </div>
                <div className="products-left__item flex justify-between">
                  <a href="">Sản Phẩm Không Giảm</a>
                  <span>11</span>
                </div>
              </div>
              <div className="products-left__box">
                <p className="mt-2">Loại</p>
                <div className="products-left__item flex justify-between   pt-3">
                  <a href="">Áo</a>
                  <span>11</span>
                </div>
                <div className="products-left__item flex justify-between">
                  <a href="">Quần</a>
                  <span>11</span>
                </div>
                <div className="products-left__item flex justify-between">
                  <a href="">Giày</a>
                  <span>11</span>
                </div>
              </div>
              <div className="products-left__box">
                <p className="mt-2">Giá</p>
                <div className="products-left__item flex justify-between  pt-3">
                  <a href="">Sản Phẩm Giảm</a>
                  <span>11</span>
                </div>
                <div className="products-left__item flex justify-between">
                  <a href="">Sản Phẩm Không Giảm</a>
                  <span>11</span>
                </div>
              </div>
              <div className="products-left__box ">
                <p className="mt-2">Màu Sắc</p>
                <div className="products-left__item flex justify-between  pt-3">
                  <a href="">Sản Phẩm Giảm</a>
                  <span>11</span>
                </div>
                <div className="products-left__item flex justify-between">
                  <a href="">Sản Phẩm Không Giảm</a>
                  <span>11</span>
                </div>
              </div>
            </div>
          </div>
          <div className="products-right">
            <div className="products-title">
              <h5>101 sản phẩm</h5>
            </div>
            <div className="flex flex-wrap gap-[0.5%]">
              {data.map((item:any)=>{
                return   <div
                className="w-[24.5%] item-product mt-[10px] relative"
                style={{ background: "white" }}
              >
            <Link href={`/sanPhamChiTiet/${item._id}`}>   
             {item.discount > 0 ? (
                  <div
                    className="discount absolute top-2 right-2 text-white py-1 px-3"
                    style={{ background: "red" }}
                  >
                    -{item.discount}%
                  </div>
                ) : (
                  ""
                )}

              
                <div className="image-product">
                  <img
                    src={`${src}/${item.image}`}
                    alt=""
                  />
                </div>
                </Link>
                <div className="text-product text-center py-3">
                  <h5 className="font-semibold">{item.name}</h5>
                     {item.discount > 0 ?<p className="price-product text-center text-red-600">
                    
                
                    {(item.price-(item.price * (item.discount / 100))).toLocaleString()} <span className="banDau">  {item.price.toLocaleString()}đ</span>
                  </p> :<p className="price-product text-center text-red-600">
                    
                
                    {item.price.toLocaleString()}đ
                  </p>} 
              
                  <div className="flex justify-center">
                    <button className="btn-primary">Mua ngay</button>
                  </div>
                </div>
            
              </div>

              })}
            
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SanPham;
