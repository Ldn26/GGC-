import Image from 'next/image'
import React from 'react'


function Footer() {
  return (
    <footer className=" mt-10 banner text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1  text-center ">
          {/* Column 1 - About */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* <h3 className="text-xl font-bold mb-4 text-center text-primary">
               خدام
            </h3> */}
            <p className="mb-8 text-center ">
              نقدم حلولاً متكاملة لإدارة المخزون والمبيعات لتطوير أعمالك وتحقيق
              النجاح المستدام.
            </p>
            <div className="flex justify-center gap-4   items-center space-x-4 space-x-reverse">
              <a href="#" className="hover:text-primary transition">
                {/* فيسبوك */}
                <Image alt="fab" src="/assets/fb.png" width={40} height={40} />
              </a>
              <a href="#"  className="hover:text-primary  transition">
                <Image alt="in" src="/assets/in.png" width={40} height={40} />
              </a>
              {/* <a href="#" className="hover:text-primary transition">
                لينكدإن
              </a> */}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4 text-center text-primary">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              {["الرئيسية", "الخدمات", "الأسعار", "المميزات", "تواصل معنا"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-primary text-center transition block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div> */}

          {/* Column 3 - Services */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4 text-primary text-center">
              خدماتنا
            </h3>
            <ul className="space-y-2 ">
              {[
                "إدارة المخزون",
                "تقارير المبيعات",
                "مسح الباركود",
                "حلول متعددة الفروع",
                "التكامل مع أنظمة الدفع",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-primary text-center transition block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Column 4 - Contact */}
          {/* <div className="sm:col-span-2 lg:col-span-1"> 
            <h3 className="text-xl font-bold mb-4 text-primary">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-start justify-center sm:justify-end">
                <span className="ml-2">📍</span>
                <span>الجزائر، الجزائر العاصمة، الجزائر</span>
              </li>
              <li className="flex items-center justify-center sm:justify-end">
                <span className="ml-2">📞</span>
                <span>+213 540849366</span>
              </li>
              <li className="flex items-center justify-center sm:justify-end">
                <span className="ml-2">📞</span>
                <span>+213 541593067</span>
              </li>
              <li className="flex items-center justify-center sm:justify-end">
                <span className="ml-2">✉️</span>
                <span className="text-sm break-all">
                  zianitakieddineofficial@gmail.com
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-end">
                <span className="ml-2">✉️</span>
                <span className="text-sm break-all">youcefldn26@gmail.com</span>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2025 خِدْامَ. جميع الحقوق محفوظة</p>
          <div className="mt-2 text-sm text-gray-400 flex justify-center space-x-2 space-x-reverse">
            <a href="#" className="hover:text-white transition">
              شروط الخدمة
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

