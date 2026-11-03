import React from 'react';

export default function About() {
  return (
    <section className="about">
      <div id="about-company" className="container about-container">
        {/* Left: Text Content */}
        <div className="about-content">
          <h2>เกี่ยวกับเรา</h2>
          <h3>GEF - ผู้นำด้านนวัตกรรมเครื่องปั่น</h3>

          <p>
            บริษัท GEF ผู้นำในการสร้างสรรค์เครื่องปั่นสำหรับอุตสาหกรรมเครื่องดื่ม ด้วยประสบการณ์กว่า 20 ปี เรามุ่งมั่นในการสร้างสินค้าที่มีคุณภาพสูงและเทคโนโลยีล้ำสมัย
          </p>

          <p>
            ผลิตภัณฑ์ของเรา ได้รับการยอมรับจากผู้ประกอบการทั่วประเทศ และเป็นที่เชื่อถือของลูกค้าในด้านความทนทาน ประสิทธิภาพ และการบริการหลังการขาย
          </p>
        </div>

        {/* Right: Image */}
        <div className="about-image-content">
          <img src="/media/image/cert.jpg" alt="Certificate" />
        </div>
      </div>
    </section>
  );
}
