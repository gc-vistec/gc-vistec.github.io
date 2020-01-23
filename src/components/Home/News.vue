<template>
  <section id="news">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <h2>ข่าวสาร</h2>
            <ul class="timeline" v-for="announcement in announcements" v-bind:key="announcement.title">
              <li class="list-item-announcement">
                <span class="announcement-title">{{announcement.title}}</span>
                <span class="float-right announcement-datetime"><i class="fas fa-clock"></i> {{announcement.datetime}}</span>
                <p class="announcement-content" v-html="announcement.content"></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      announcements: [
        {
          title: 'การสมัครเข้าร่วมโครงการ',
          content: 'เราได้อัพเดตเว็บไซต์ของเราเพื่อเพิ่มช่องทางในการรับสมัครแล้ว ลองดูในส่วนของ<a href="#application">การสมัคร</a>เพื่อสมัครเข้าร่วมโครงการได้เลย',
          datetime: '25 ก.พ. 2562'
        },
        {
          title: 'Course Syllabi และคำถามที่พบบ่อย',
          content: 'เราได้เพิ่ม <a href="#curriculum">Course Syllabi</a> และ <a href="#contact">คำถามที่พบบ่อย</a>เข้ามาในเว็บไซต์แล้ว',
          datetime: '25 ก.พ. 2562'
        },
        {
          title: 'โบรชัวร์ข้อมูล',
          content: '<a href="/static/informationbrochure.pdf" target="_blank">ดูโบรชัวร์ <i class="fas fa-external-link-alt"></i></a>',
          datetime: '25 ก.พ. 2562'
        },
        {
          title: 'งานเปิดตัวโครงการ',
          content: '<a href="' + require('../../assets/dex-spark-poster.jpg') + '" target="_blank">ดูโปสเตอร์ <i class="fas fa-external-link-alt"></i></a> <a class="ml-2" href="https://vistec-my.sharepoint.com/:v:/g/personal/pasita_c_vistec_ac_th/Ee0mdEChl95JqknMvTSIFGQBUWyYXanrHheUr2ts2HO3SQ?e=fySbrt" target="_blank">ดูวิดีโอ <i class="fas fa-play-circle"></i></a>',
          datetime: '25 ก.พ. 2562'
        }
      ]
    }
  }
}
</script>
<style scoped>
  ul.timeline {
    list-style-type: none;
    position: relative;
  }

  ul.timeline:before {
      content: ' ';
      background: #d4d9df00;
      display: inline-block;
      position: absolute;
      left: 29px;
      width: 2px;
      height: 100%;
      z-index: 400;
  }

  ul.timeline > li {
      margin: 20px 0;
      padding-left: 20px;
  }

  ul.timeline > li:before {
      content: ' ';
      background: white;
      display: inline-block;
      position: absolute;
      border-radius: 50%;
      border: 10px solid #582e91;
      margin-top: 6px;
      left: 20px;
      width: 20px;
      height: 20px;
      z-index: 400;
  }

  .announcement-datetime > i {
    font-size: 80%;
  }

  .announcement-datetime {
    margin-top: 7px;
  }

  .announcement-title {
    font-size: 140%;
    font-weight: 600;
  }
</style>