<template>
  <section class="lead" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>ติดต่อ-สอบถาม</h2>
        </div>
        <div class="col-lg-8 mt-2">
          <h3>
            มีข้อสงสัย?
          </h3>
          <p>
            ลองอ่านข้อมูลในคำถามที่พบบ่อยดูก่อน
          </p>
        </div>
        <div class="col-lg-4 mt-2 text-right">
          <h2 class="font-weight-bold">
            <a href="#" data-toggle="modal" data-target="#faqModal">
              FAQ <i class="fas fa-file-alt"></i>
            </a>
          </h2>

          <!-- Modal -->
          <div class="modal fade" id="faqModal" tabindex="-1" role="dialog" aria-labelledby="faqModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="faqModalLabel">คำถามที่พบบ่อย</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body lead text-justify">
                  <h2 class="mt-5">
                    หมวดสถาบันและหลักสูตรการเรียน 
                  </h2>
                  <h4>
                    VISTEC คือมหาวิทยาลัยเกี่ยวกับอะไร คณะผู้สอนคือใคร 
                  </h4>
                  <p>
                    สถาบันวิทยสิริเมธี (VISTEC) เป็นสถาบันที่มุ่งเน้นผลิตงานวิจัยและสร้างบุคลากรวิจัยทางด้านวิทยาศาตร์และเทคโนโลยี ปัจจุบันเปิดสอนในระดับปริญญาโทและเอก ใน 4 สาขาวิชา รวมถึงสาขา Information Science and Technology ด้วย 
                  </p>
                  <p>
                    อาจารย์จะเป็นผู้เชี่ยวชาญในวงการ data science ของเมืองไทย ทั้งจากมหาวิทยาลัยและภาคเอกชน 
                  </p>
                  <h4>
                    หลักสูตร Data Science and Engineering Program เป็นหลักสูตรที่เกี่ยวกับอะไร 
                  </h4>
                  <p>
                    หลักสูตรเพื่อพัฒนาบุคลากรด้าน Data Science ให้กับกลุ่มปตท.อย่างครบวงจร โดยในปีแรกจะมุ่งเน้นไปที่การปูพื้นฐาน Data Science เบื้องต้น เพื่อให้ผู้เข้าอบรมสามารถนำข้อมูลที่มีอยู่มาใช้ในการทำงานได้มีประสิทธิภาพมากขึ้น เช่น การสร้างแบบจำลองแบบง่ายๆ ได้ 
                  </p>
                  <h4>
                    หลักสูตรที่เรียนเป็นหลักสูตรเฉพาะสำหรับกลุ่มปตท. จะแตกต่างกับหลักสูตรปกติอย่างไร 
                  </h4>
                  <p>
                    หลักสูตรนี้ได้ถูกออกแบบมาให้เหมาะสมกับการทำงานของพนักงานส่วนใหญ่ของปตท. ซึ่งมีพื้นฐานทางด้านวิศวกรรม แต่ในขณะเดียวกันก็มีคอร์สปูพื้นฐาน สำหรับพนักงานในสายอื่น หรือพนักงานที่ต้องการทบทวนความรู้พื้นฐานเช่นกัน 
                  </p>
                  <p>
                    ตัวอย่างที่ใช้ในการเรียนการสอนส่วนหนึ่งจะเป็นตัวอย่างจากบริษัทในเครือปตท. และผู้เข้าอบรมจะได้ลงมือทำโปรเจ็กต์เพื่อตอบโจทย์การทำงานของบริษัทของตัวเอง 
                  </p>
                  <h4>
                    หากลงเรียนหลักสูตรนี้จะได้เรียนรู้อะไรบ้าง และจะนำมาปรับใช้ในการทำงานได้อย่างไรบ้าง 
                  </h4>
                  <p>
                    ผู้เข้าอบรมจะได้เรียนรู้ทักษะพื้นฐานสำหรับ Data Science คือ พื้นฐานคณิตศาสตร์ สถิติ การเขียนโปรแกรมเบื้องต้น รวมไปถึงการใช้ฐานข้อมูลเบื้องต้น และสามารถเลือกเรียนสาขาเฉพาะเพิ่มเติมได้ดังนี้ 
                  </p>
                  <div class="table-responsive-md text-left">
                    <table class="table table-sm">
                      <thead class="font-weight-bold"><tr><th>Track</th><th>ทักษะที่จะได้เรียนรู้</th><th>ตัวอย่างตำแหน่งงาน</th></tr></thead>
                      <tbody>
                        <tr>
                          <th scope="row">ML/AI and Data Mining</th>
                          <td>ใช้ Machine Learning และ Artificial Intelligence ในการแก้ปัญหาทางธุรกิจ</td>
                          <td>Data Scientist, ML/AI Solution Provider</td>
                        </tr>
                        <tr>
                          <th scope="row">Data Engineering</th>
                          <td>สร้าง และดูแลระบบข้อมูล และช่วย support ข้อมูลให้แก่บุคลากรด้าน Data Science ในแขนงอื่น ๆ</td>
                          <td>Data Storage and Extraction Manager</td>
                        </tr>
                        <tr>
                          <th scope="row">Visual Analytics and HCI</th>
                          <td>นำเสนอข้อมูลในรูปแบบต่างๆ รวมถึงการสร้างเครื่องมือด้านข้อมูลให้แก่บุคคลทั่วไป</td>
                          <td>User Interface (UI) and User Experience (UX) Expert</td>
                        </tr>
                        <tr>
                          <th scope="row">Business Analytics</th>
                          <td>เปลี่ยนข้อมูลให้เป็น business insight และกลยุทธ์ทางธุรกิจ และนำสิ่งเหล่านี้ไปใช้พัฒนาการประกอบธุรกิจ</td>
                          <td>Business Analytics Solution Provider</td>
                        </tr>
                      </tbody>
                    </table>
                    <h4>
                      เรียนจบแล้วได้รับใบประกาศ / วุฒิบัตรจาก VISTEC หรือไม่ 
                    </h4>
                    <p>
                      หลักสูตรนี้ไม่มีใบประกาศหรือวุฒิบัตรให้ แต่สำหรับพนักงาน GC จะได้รับการบันทึกในประวัติว่าเคยผ่านการเรียนหลักสูตรนี้ เพื่อประโยชน์ในการ Rotate หรือ ปรับระดับในอนาคต และสำหรับพนักงานในกลุ่มปตท. ทาง VISTEC จะแจ้งผลการอบรมกลับไปที่บริษัทต้นสังกัดเพื่อบันทึกประวัติ ทั้งนี้จะขึ้นอยู่กับนโยบายของบริษัทต้นสังกัดด้วย   
                    </p>

                    <h2 class="mt-5">
                      หมวดการเตรียมตัว
                    </h2>
                    <h4>
                      ต้องมีความรู้พื้นฐานอะไรบ้าง มีการสอบเพื่อวัดพื้นฐานหรือไม่ 
                    </h4>
                    <p>
                      หลักสูตรไม่ได้กำหนดความรู้พื้นฐานอย่างตายตัว ผู้เข้าอบรมที่มีพื้นฐานทางคณิตศาสตร์ สถิติ และการเขียนโปรแกรม อาจจะสามารถเรียนรู้ได้เร็วกว่าผู้เข้าอบรมที่ไม่มีพื้นฐานดังกล่าว ทั้งนี้ จะมีการสอบวัดพื้นฐานเพื่อจัดผู้เข้าอบรมให้เข้าเรียนตามระดับที่เหมาะสม 
                    </p>
                      
                    <h4>
                      ระยะเวลาเรียนประมาณกี่เดือน เรียนวันไหน และเรียนที่ไหน 
                    </h4>
                    <h5>
                      ระยะเวลาเรียน 
                    </h5>
                    <p>
                      ระยะเวลาเรียนตลอดหลักสูตร ตั้งแต่ Level 0 ถึง Level 1.3 ใช้เวลาประมาณ 10 เดือน โดย Level 0 ใช้เวลา 1 วัน, Level 1.1- 1.3 ใช้เวลา Level ละ 3 เดือน  
                    </p>
                    <h5>
                      เรียนวันไหน  
                    </h5>
                    <p>
                      ในแต่ละ Level จะเรียนเฉลี่ยสัปดาห์ละ 1 วัน โดยแบ่งเป็น Intensive class 4-5 ครั้ง Clinic สำหรับให้คำปรึกษาการเรียนหรือการทำโปรเจ็ค 3-4 ครั้ง ดูงานนอกสถานที่ 1-2 ครั้ง และเวลาที่เหลือสำหรับให้ผู้เรียนทำโปรเจ็คต์ 
                    </p>
                    <p>
                      <span class="font-weight-bold">หมายเหตุ&colon;</span> จะนัดหมายวันและเวลาเรียนอีกครั้ง
                    </p>
                    <h5>
                      เรียนที่ไหน 
                    </h5>
                    <p>
                      การเรียนการสอนส่วนใหญ่จะจัดที่ GC Rayong office และมีการจัดการเรียนการสอน หรือการดูงานนอกสถานที่บ้าง ไม่เกิน Level ละ 2 ครั้ง  
                    </p>

                    <h4>
                      ถ้าสนใจสมัครได้เลยหรือไม่ ต้องขออนุมัติจากผู้บังคับบัญชาหรือไม่ 
                    </h4>
                    <p>
                      เหมือนกับการเข้าหลักสูตรฝึกอบรมอื่นๆ จำเป็นต้องได้รับอนุญาตจากผู้บังคับบัญชาก่อน โดยพนักงานที่สนใจต้องได้รับอนุมัติจาก Supervisor ของท่านเป็นลายลักษณ์อักษรผ่านอีเมล์หรือเอกสารอื่นๆ และแนบใบอนุมัตินี้มากับ online application form ด้วย   
                    </p>
                    <h4>
                      หลักสูตรนี้ใครสามารถสมัครได้บ้าง และสมัครแล้วจะได้เรียนทุกคนหรือไม่ 
                    </h4>
                    <p>
                      พนักงานระดับ Division Manager ลงมา สามารถสมัครได้ แต่เนื่องจากมีโควต้าจำกัด จึงจำเป็นต้องมีการคัดเลือกพนักงานเพียง 100 คน เพื่อให้การเรียนการสอนมีประสิทธิภาพสูงสุด 
                    </p>
                    
                    <h4>
                      มีค่าใช้จ่ายหรือไม่ ใครจะเป็นผู้รับผิดชอบค่าใช้จ่าย  
                    </h4>
                    <p>
                      ค่าหลักสูตรเฉลี่ย 110,000 บาทต่อคน  
                    </p>
                    <p>
                      สำหรับพนักงานในกลุ่ม GC บริษัท GC จะเป็นผู้ออกค่าหลักสูตรให้ สำหรับพนักงานในกลุ่ม ปตท. อื่นๆ ทาง GC จะเรียกเก็บค่าหลักสูตรจากต้นสังกัดตามเงื่อนไขที่ตกลงกัน 
                    </p>
                    <p>
                      ทั้งนี้ ค่าใช้จ่ายอื่นๆ นอกเหนือจากที่เตรียมให้ เช่น ค่าเดินทาง ค่าอาหาร ค่าอุปกรณ์ที่ใช้ในการเรียน ค่าที่พัก เป็นต้น ต้นสังกัดของพนักงานหรือพนักงานจะต้องรับผิดชอบค่าใช้จ่ายเอง ซึ่งค่าใช้จ่ายอื่น ๆ หลังจากผ่านการอบรมเจ้าหน้าที่จะแจ้งให้ทราบอีกครั้ง  
                    </p>

                    <h2 class="mt-5">
                      หมวคคำถามทั่วไป 
                    </h2>
                    <h4>
                      หากต้องเดินทางไปที่ VISTEC จะมีรถรับส่งหรือไม่  
                    </h4>
                    <p>
                      หากต้องเดินทางไปเรียนที่ VISTEC จะมีรถตู้รับ-ส่งระหว่าง GC Rayong Office และ VISTEC  
                    </p>
                      
                    <h4>
                      มีหลักสูตรเรียนออนไลน์หรือไม่ 
                    </h4>
                    <p>
                      ทางทีมงานจะบันทึกวิดีโอการเรียนการสอน ผู้อบรมและพนักงานสามารถเข้าไปให้ดูย้อนหลังได้ที่เวปไซต์ www.dexsparkprogram.com  
                    </p>
                    
                    <h4>
                      แผนที่ VISTEC / RO / ENCO (ถ้ามีเรียนที่ ENCO) 
                    </h4>
                    <p>
                      <span class="font-weight-bold">VISTEC:</span> <a href="https://goo.gl/maps/mCaPbcqBZUJ2" target="_blank">เปิดด้วย Google Maps <i class="fas fa-external-link-alt"></i></a> <br>
                      <span class="font-weight-bold">RO:</span> <a href="https://goo.gl/maps/1SJAs31VWCv" target="_blank">เปิดด้วย Google Maps <i class="fas fa-external-link-alt"></i></a> <br>
                      <span class="font-weight-bold">ENCO:</span> <a href="https://goo.gl/maps/kPy26aHvfLH2" target="_blank">เปิดด้วย Google Maps <i class="fas fa-external-link-alt"></i></a> 
                    </p>
                    
                    <h4>
                      หากต้องการข้อมูลเพิ่มเติมสามารถสอบถามข้อมูลได้อย่างไร 
                    </h4>
                    <p>
                      ศึกษาข้อมูลเพิ่มเติมได้ที่ <br>
                      <span class="font-weight-bold">Website:</span> <a href="http://www.dexsparkprogram.pttgcgroup.com" target="_blank">www.dexsparkprogram.pttgcgroup.com <i class="fas fa-external-link-alt"></i></a> <br>
                      <span class="font-weight-bold">Line ID:</span> <a href="http://line.me/ti/p/@dEXInfo" target="_blank">@dexinfo <i class="fas fa-external-link-alt"></i></a> <br>
                      <span class="font-weight-bold">Email:</span> <a href="mailto:dexperience@pttgcgroup.com">dexperience@pttgcgroup.com <i class="fas fa-envelope-square"></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <h3>
            ช่องทางการติดต่อ
          </h3>
          <p>
            หากยังไม่พบคำตอบ สามารถติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่
          </p>
        </div>
        <div class="col-lg-4 mt-2 text-right">
          <h2 class="font-weight-bold">
            <a href="http://line.me/ti/p/@dEXInfo" target="_blank">
              @dEXInfo <i class="fab fa-line"></i>
            </a>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #faqModal h4 {
    margin-top: 1.75rem;
  }
</style>
