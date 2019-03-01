<template>
  <section id="curriculum" class="lead">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2>หลักสูตรและการแบ่งระดับผู้เรียน</h2>
        </div>
        <div class="col-md-4 text-right">
          <h2 class="font-weight-bold">
            <a href="#" data-toggle="modal" data-target="#courseSyllabusModal">
              Course Syllabi <i class="fas fa-file-alt"></i>
            </a>
          </h2>
        </div>
        <div class="col-md-12 mx-auto lead">
          <p>
            หลักสูตรนี้เน้นการปูพื้นฐาน Data Science (Level 1&colon; Entry-Level) โดยผู้เรียนที่ผ่าน Pre-screening ทุกคน จะได้เรียนปรับพื้นฐานใน Level 0 ร่วมกัน ก่อนวัดระดับและแยกผู้เรียนออกเป็น 3 กลุ่ม
          </p>
          
          <center>
            <p><img src="../../assets/curriculum.png" style="max-width: 100%; width: 40rem;"></p>
          </center>

          <h3>จุดมุ่งหมายของแต่ละระดับ</h3>
          <ul>
            <li>
              <b>Level 0</b> เป็นการปรับความรู้พื้นฐานให้ผู้เรียนทุกคน
            </li>
            <li>
              <b>Level 1.1-1.2</b> เป็นทักษะพื้นฐานสำหรับ Data Science ได้แก่ คณิตศาสตร์ สถิติ การเขียนโปรแกรมเบื้องต้น และการใช้ฐานข้อมูลเบื้องต้น
            </li>
            <li>
              <b>Level 1.3</b> ผู้เรียนสามารถเลือกเรียนในสาขาที่สนใจ ได้ 2 สาขา จาก 4 สาขา ดังนี้
            </li>
          </ul>
          <div id="curriculum-table" class="table-responsive-md text-left">
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
          </div>
          <p>
            ผู้เรียนจะเข้าเรียนใน Level ที่ถูกกำหนดจากการวัดผล โดยผู้เรียนที่ได้ Level สูงไม่จำเป็นต้องเข้าเรียนภาคทฤษฎี (Intensive Class) ใน Level ที่ต่ำกว่า แต่ต้องมาเข้าร่วมทำโปรเจกต์ในทุก Level
          </p>
          <h3>กำหนดการ</h3>
          <ul>
            <li>
              ผู้สมัครทุกคนจะต้องทำ Pre-screening test เพื่อทดสอบทักษะเบื้องต้นเกี่ยวกับความเข้าใจด้าน Data Science และโอกาสที่เอาไปประยุกต์ใช้งานได้จริง เปิดรับสมัครผ่านเว็บไซต์ ันที่ 26 กุมภาพันธ์ ถึงวันที่ 15 มีนาคม 2562
            </li>
            <li>
              ประกาศผลผู้ผ่าน Pre-screening – 1 เมษายน 2562 ผ่านทางเว็บไซต์
            </li>
            <li>
              เรียนหลักสูตรปรับความรู้พื้นฐาน (Level 0) และวัดระดับ (Placement test) เพื่อแบ่งผู้เรียนตามความเหมาะสม – ช่วงเดือนเมษายน 2562
            </li>
            <li>
              ประกาศผลวัดระดับ (Placement test) – ปลายเดือนเมษายน 2562
            </li>
            <li>
              เรียนหลักสูตร Entry-beginner (Level 1.1) – เดือนพฤษภาคม-กรกฎาคม 2562
            </li>
            <li>
              เรียนหลักสูตร Entry-intermediate (Level 1.2) – เดือนสิงหาคม-ตุลาคม 2562
            </li>
            <li>
              เรียนหลักสูตร Entry-advance (Level 1.3) – เดือนตุลาคม-ธันวาคม 2562
            </li>
            <li>
              ประกาศผลการเรียน – เดือนมกราคม 2563
            </li>
          </ul>

          <!-- Modal -->
          <div class="modal fade" id="courseSyllabusModal" tabindex="-1" role="dialog" aria-labelledby="courseSyllabusModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="courseSyllabusModalLabel">Course Syllabi</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body lead">
                  <h2 class="mt-5">
                    Level 0
                  </h2>
                  <p>
                    <span class="font-weight-bold">Date &amp; Time:</span> TBA (One-day seminar)<br>
                    <span class="font-weight-bold">Instructor:</span> TBA<br>
                    <span class="font-weight-bold">Course Format:</span> Lectures and discussion sessions
                  </p>
                  <h4>Description</h4>
                  <p>
                    This course is an overview of data science. The objective of this course is to introduce the four key areas of data science: machine learning/artificial intelligence and data mining, data engineering, visual analytics and human-computer interaction, and business analytics. After this seminar, participants are expected to have a good understanding of what data science is as well as what it can do to help in business operations. 
                  </p>
                  <h4>
                    Tentative topics
                  </h4>
                  <ul>
                    <li>
                      What is data science? What do data scientists do? 
                    </li>
                    <li>
                      Engineering for Data Scalability 
                    </li>
                    <li>
                      Effective Communications with Visual Analytics 
                    </li>
                    <li>
                      Big Data Analytics Success Stories 
                    </li>
                  </ul>


                  <h2 class="mt-5">
                    Level 1.1
                  </h2>
                  <p>
                    <span class="font-weight-bold">Date &amp; Time:</span> TBA (5 classes/days delivered in 3-4 sessions, each session is 1-2 days) <br>
                    <span class="font-weight-bold">Instructor:</span> TBA<br>
                    <span class="font-weight-bold">Course Format:</span> Lectures, practical sessions, and a workshop <br>
                    <span class="font-weight-bold">Workshop:</span> Mini Data Workflow
                  </p>
                  <h4>
                    Description
                  </h4>
                  <p>
                    This course establishes a foundation in mathematics, statistics, programming, and database required for data science. We will cover basic mathematics such as vector, matrix, and functions, as well as basic statistics. We will also get you started with basic programming in Python and SQL. At the end of this course, you should be able to perform basic data analysis such as querying data, and generating plots and summary statistics in Python. 
                  </p>
                  <h4>
                    Course Details (Tentative)
                  </h4>
                  <h5>
                    Class 1
                  </h5>
                  <h6>
                    Vector &amp; Matrix
                  </h6>
                  <ul>
                    <li>
                      What is a vector? 
                    </li>
                    <li>
                      Basic vector operations: addition, scalar multiplication, dot product, cross product 
                    </li>
                    <li>
                      What is a matrix? 
                    </li>
                    <li>
                      Vector &amp; Matrix in Python 
                    </li>
                  </ul>
                  <h6>
                    Basic Python
                  </h6>
                  <ul>
                    <li>
                      Basic syntax e.g. print(), creating variables 
                    </li>
                    <li>
                      Basic packages, importing, calling functions from imported packages 
                    </li>
                  </ul>
                  <h5>
                    Class 2
                  </h5>
                  <h6>
                    Statistics I
                  </h6>
                  <ul>
                    <li>
                      Histogram and empirical distribution 
                    </li>
                    <li>
                      Measures of central tendency 
                    </li>
                    <li>
                      Measures of variance
                    </li>
                  </ul>
                  <h6>
                    Basic Visualization: Matplotlib
                  </h6>
                  <ul>
                    <li>
                      Matplotlib architecture 
                    </li>
                    <li>
                      Basic plotting with matplotlib 
                    </li>
                    <li>
                      Scatter plots, line plots, and bar charts 
                    </li>
                    <li>
                      Histograms and box plots 
                    </li>
                    <li>
                      Heatmaps 
                    </li>
                  </ul>
                  <h5>
                    Class 3 
                  </h5>
                  <h6>
                    Toolbox Tutorials 
                  </h6>
                  <ul>
                    <li>
                      Command line 
                    </li>
                    <li>
                      Git 
                    </li>
                  </ul>
                  
                  <h6>
                    Equation, Functions, and Graphs I 
                  </h6>
                  <ul>
                    <li>
                      What is a function? 
                    </li>
                    <li>
                      Domain, range 
                    </li>
                  </ul>
                  
                  <h6>
                    Fundamentals of Programming I 
                  </h6>
                  <ul>
                    <li>
                      Variable and types 
                    </li>
                    <li>
                      Functions 
                    </li>
                  </ul>
                  
                  <h5>
                    Class 4 
                  </h5>
                  <h6>
                    Equation, Functions, and Graphs II 
                  </h6>
                  <ul>
                    <li>
                      How to graph a linear function (intercept and slope) 
                    </li>
                    <li>
                      Exponentials, radicals, and logarithms 
                    </li>
                    <li>
                      Polynomials 
                    </li>
                    <li>
                      Factorization 
                    </li>
                  </ul>
                  
                  <h6>
                    Fundamentals of Programming II 
                  </h6>
                  <ul>
                    <li>
                      Control Flows
                    </li>
                  </ul>

                  <h5>
                    Class 5 
                  </h5>
                  <h6>
                    SQL 
                  </h6>
                  <ul>
                    <li>
                      What are relational database and SQL? 
                    </li>
                    <li>
                      Basic commands: SELECT 
                    </li>
                  </ul>
                  

                  <h2 class="mt-5">
                    Level 1.2
                  </h2>
                  <p>
                    <span class="font-weight-bold">Date &amp; Time:</span> TBA (3-4 sessions, each is 1-2 days) <br>
                    <span class="font-weight-bold">Instructor:</span> TBA<br>
                    <span class="font-weight-bold">Course Format:</span> Lectures, practical sessions, and a workshop <br>
                    <span class="font-weight-bold">Workshop:</span> Build your first data model
                  </p>
                  <h4>
                    Description
                  </h4>
                  <p>
                    This course continues to build a foundation in mathematics, statistics, programming, and database. We will cover relevant statistics, machine learning basics, and how to work with data in Python. You will also learn intermediate SQL commands in this level. At the end of this course, you should be able to query and clean data, as well as build a simple statistical/machine learning model in Python.
                  </p>
                  <h4>
                    Course Details (Tentative)
                  </h4>
                  <h5>
                    Class 1  
                  </h5>
                  <h6>
                    Python Refresher 
                  </h6>
                  <ul>
                    <li>
                      Python: Data Structure, Numpy, Pandas 
                    </li>
                    <li>
                      Reading/writing data 
                    </li>
                    <li>
                      Lists 
                    </li>
                    <li>
                      Arrays in Numpy 
                    </li>
                    <li>
                      Data frame in Pandas
                    </li>
                  </ul> 
                  
                  <h6>
                    Statistics II 
                  </h6>
                  <ul>
                    <li>
                      Probability basics 
                    </li>
                    <li>
                      Random variables 
                    </li>
                  </ul>
                  
                  <h5>
                    Class 2 
                  </h5>
                  <h6>
                    Statistics III 
                  </h6>
                  <ul>
                    <li>
                      Sample and sampling distribution 
                    </li>
                    <li>
                      Statistical inference: confidence interval and hypothesis testing 
                    </li>
                    <li>
                      Linear regression 
                    </li>
                    <li>
                      Statistical inference and linear regression in Python 
                    </li>
                  </ul>
                  
                  <h5>
                    Class 3 
                  </h5>
                  <h6>
                    Python: Data Wrangling and Data Summary 
                  </h6>
                  <ul>
                    <li>
                      Missing values 
                    </li>
                    <li>
                      Outliers 
                    </li>
                    <li>
                      Merging 
                    </li>
                    <li>
                      Group by 
                    </li>
                    <li>
                      Scales/regularization 
                    </li>
                    <li>
                      Strings and dates 
                    </li>
                  </ul>
                  
                  <h5>
                    Class 4 
                  </h5>
                  <h6>
                    Introduction to ML 
                  </h6>
                  <ul>
                    <li>
                      Supervised vs unsupervised learning 
                    </li>
                    <li>
                      Regression vs classification 
                    </li>
                    <li>
                      Training, validation, parameter tuning, feature engineering 
                    </li>
                    <li>
                      Overfitting, bias and variance tradeoff 
                    </li>
                  </ul>
                  
                  <h5>
                    Class 5 
                  </h5>
                  <h6>
                    SQL 
                  </h6>
                  <ul>
                    <li>
                      Joins 
                    </li>
                    <li>
                      Aggregate
                    </li>
                  </ul>
                  

                  <h2 class="mt-5">
                    Level 1.3 (ML/AI and Data Mining Track)
                  </h2>
                  <p>
                    <span class="font-weight-bold">Date &amp; Time:</span> TBA (3-4 sessions, each is 1-2 days) <br>
                    <span class="font-weight-bold">Instructor:</span> TBA<br>
                    <span class="font-weight-bold">Course Format:</span> Lectures, practical sessions, and a workshop <br>
                    <span class="font-weight-bold">Workshop:</span> Creating an (almost) intelligent agent
                  </p>
                  <h4>
                    Description
                  </h4>
                  <p>
                    This course is a broad overview of machine learning algorithms. We will cover both supervised and unsupervised learning techniques. By the end of this course, students should be able to build both regression and classification models using commonly used tools such as tree-based methods and neural networks.
                  </p>
                  <h4>
                    Course Details (Tentative)
                  </h4>
                  <h5>
                    Class 1 
                  </h5>
                  <h6>
                    Supervised Learning I–Regression 
                  </h6>
                  <ul>
                    <li>
                      Simple/multiple linear regression 
                    </li>
                    <li>
                      Generalized additive models 
                    </li>
                    <li>
                      Ridge regression and LASSO 
                    </li>
                    <li>
                      Tree-based methods
                    </li>
                  </ul> 
                  
                  <h5>
                    Class 2 
                  </h5>
                  <h6>
                    Supervised Learning II—Classification 
                  </h6>
                  <ul>
                    <li>
                      Introduction to classification, e.g. how to evaluate classification models 
                    </li>
                    <li>
                      KNN 
                    </li>
                    <li>
                      Support vector machine 
                    </li>
                    <li>
                      Logistic regression 
                    </li>
                  </ul>
                  
                  <h5>
                    Class 3 
                  </h5>
                  <h6>
                    Unsupervised Learning 
                  </h6>
                  <ul>
                    <li>
                      Dimensionality reduction 
                    </li>
                    <li>
                      K means 
                    </li>
                    <li>
                      Clustering: hierarchical
                    </li>
                  </ul> 
                  
                  <h5>
                    Class 4 
                  </h5>
                  <h6>
                    Neural Networks and Deep Learning 
                  </h6>
                  <ul>
                    <li>
                      Logistic regression and multilayer perceptron 
                    </li>
                    <li>
                      Loss function, cost function, gradient, and back-prop 
                    </li>
                    <li>
                      Neural networks 
                    </li>
                    <li>
                      Reinforcement learning 
                    </li>
                    <li>
                      Convolutional Neural Networks and Recurrent Neural Networks 
                    </li>
                  </ul>
                  
                  <h5>
                    Class 5 
                  </h5>
                  <ul>
                    <li>
                      Workshop: Creating an (almost) intelligent agent 
                    </li>
                  </ul>


                  <h2 class="mt-5">
                    Level 1.3 (Data Engineering Track)
                  </h2>
                  <p>
                    <span class="font-weight-bold">Date &amp; Time:</span> TBA (3-4 sessions, each is 1-2 days) <br>
                    <span class="font-weight-bold">Instructor:</span> TBA<br>
                    <span class="font-weight-bold">Course Format:</span> Lectures, practical sessions, and a workshop <br>
                  </p>
                  <h4>
                    Description
                  </h4>
                  <p>
                    This course is a broad overview of machine learning algorithms. We will cover both supervised and unsupervised learning techniques. By the end of this course, students should be able to build both regression and classification models using commonly used tools such as tree-based methods and neural networks.
                  </p>
                  <h4>
                    Course Details (Tentative)
                  </h4>

                  <h5>
                    Class 1 
                  </h5>
                  <ul>
                    <li>
                      Query Processing 
                    </li>
                    <li>
                      Transaction Concept 
                    </li>
                    <li>
                      Transaction States 
                    </li>
                    <li>
                      Concurrent Executions 
                    </li>
                    <li>
                      Concurrency Control
                    </li>
                  </ul> 
                  
                  <h5>
                    Class 2  
                  </h5>
                  <ul>
                    <li>
                      Basic Motivations 
                    </li>
                    <li>
                      Introduction to Fragmentation 
                    </li>
                    <li>
                      Introduction to Replication 
                    </li>
                    <li>
                      Distributed Query Processing 
                    </li>
                    <li>
                      Introduction to Parallel Database Management System (DBMS) 
                    </li>
                    <li>
                      Taxonomy of Data Parallelism
                    </li>
                  </ul> 
                  
                  <h5>
                    Class 3 
                  </h5>
                  <ul>
                    <li>
                      Introduction to Hadoop 
                    </li>
                    <li>
                      Hadoop File System 
                    </li>
                    <li>
                      Data Lake 
                    </li>
                    <li>
                      MapReduce Programming
                    </li>
                  </ul> 
                  
                  <h5>
                    Class 4 
                  </h5>
                  <ul>
                    <li>
                      Data Pipeline Design 
                    </li>
                    <li>
                      What is ETL (Extract, Transform, Load)? 
                    </li>
                    <li>
                      ETL on Hadoop 
                    </li>
                    <li>
                      NoSQL Data Stores 
                    </li>
                    <li>
                      Data Warehousing
                    </li>
                  </ul> 
                  
                  <h5>
                    Class 5 
                  </h5>
                  <ul>
                    <li>
                      Introduction to Spark 
                    </li>
                    <li>
                      Writing Spark ETL Processes 
                    </li>
                    <li>
                      Using Spark with NoSQL Data Stores
                    </li>
                  </ul> 
                </div>
                <div class="modal-footer">
                  <a href="static/course-syllabi.pdf" target="_blank">Download as PDF <i class="fa fa-download"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="col-md-12 text-right">
          <h2 class="font-weight-bold"><a href="https://goo.gl/forms/gyV9bOPdw0UVpcPy1">Apply now <i class="fa fa-external-link"></i></a></h2>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
  #curriculum-table {
    background: rgba(0, 0, 0, .05);
  }
</style>
