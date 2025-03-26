import Image from 'next/image'
import React from 'react'


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">خِدْمَات</h3>
            <p className="mb-4  xl:text-left text-center">
              نقدم حلولاً متكاملة لإدارة المخزون والمبيعات لتطوير أعمالك وتحقيق
              النجاح المستدام.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition">
                فيسبوك
              </a>
              <a href="#" className="hover:text-primary transition">
                تويتر
              </a>
              <a href="#" className="hover:text-primary transition">
                لينكدإن
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#الرئيسية"
                  className="hover:text-primary transition"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  الأسعار
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  المميزات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition">
                  إدارة المخزون
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary   transition">
                  تقارير المبيعات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  مسح الباركود
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  حلول متعددة الفروع
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  التكامل مع أنظمة الدفع
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">تواصل معنا</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>الجزائر، الجزائر العاصمة، الجزائر</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>

                <span>+213 540849366</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>

                {/* <span>+213 0540849366</span> <br />  */}
                <span>+213 541593067</span>
              </li>

              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                {/* <span>info@khdam-app.com</span> */}
                <span> zianitakieddineofficial@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <span> youcefldn26@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>© 2025 خِدْمَات. جميع الحقوق محفوظة</p>
          <div className="mt-2 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">
              شروط الخدمة
            </a>{" "}
            |
            <a href="#" className="hover:text-white transition px-2">
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

