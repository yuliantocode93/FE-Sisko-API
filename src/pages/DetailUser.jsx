import React from "react";
import Dropdown from "../components/dropdown/DropdownCity";
import DropdownProvinsi from "../components/dropdown/dropdownProvinsi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DetailUser = () => {
  return (
    <>
      <Header />
      <section className="w-full h-screen bg-gray-100 mb-10">
        <div className="max-w-[80%] mx-auto items-center justify-center flex h-[130px] mt-[78px] bg-gray-200">
          <h1 className="text-4xl font-semibold">Data Pelanggan</h1>
        </div>
        <div className="max-w-[80%] border mx-auto bg-white mt-10 mb-[200px]">
          <form className="px-8 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div>
              <label htmlFor="email" className="text-xl font-semibold mb-2">
                Email
              </label>
              <br />
              <input id="email" type="text" className="px-5 text-xl my-2 py-2 w-full rounded border border-red-200 hover:border-red-600 transition duration-300" />
              <br />
              <label htmlFor="nama" className="text-xl font-semibold mb-2">
                Nama
              </label>
              <br />
              <input id="nama" type="text" className="px-5 text-xl my-2 py-2 w-full rounded border border-red-200 hover:border-red-600 transition duration-300" />
              <br />
              <label htmlFor="noTelp" className="text-xl font-semibold mb-2">
                No Telp
              </label>
              <br />
              <input id="noTelp" type="text" className="px-5 text-xl my-2 py-2 w-full rounded border border-red-200 hover:border-red-600 transition duration-300" />
              <br />
              <label htmlFor="whatsapp" className="text-xl font-semibold mb-2">
                Whatsapp
              </label>
              <br />
              <input id="whatsapp" type="text" className="px-5 text-xl my-2 py-2 w-full rounded border border-red-200 hover:border-red-600 transition duration-300" />
              <br />
            </div>
            <div>
              <label htmlFor="provinsi" className="text-xl font-semibold mb-2">
                Provinsi
              </label>
              <br />
              <DropdownProvinsi />
              <br />
              <label htmlFor="kota" className="text-xl font-semibold mb-2">
                Kota
              </label>
              <br />
              <Dropdown />
              <br />
              <br />
              <br />
              <label htmlFor="detailAlamat" className="text-xl font-semibold mb-2">
                Detail Alamat
              </label>
              <br />
              <input id="detailAlamat" type="text" className="px-5 text-xl my-2 py-2 w-full rounded border border-red-200 hover:border-red-600 transition duration-300" />
              <br />
              <Link to="/checkout">
                <button type="submit" className="bg-primary px-3 py-2 text-white hover:bg-red-200 rounded transition duration-300">
                  Simpan
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailUser;
