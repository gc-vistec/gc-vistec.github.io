<template>
    <div>
    <navbar></navbar>
    <header>
      <div class="container pt-5 pb-3 mb-3">
        <div class="row">
          <div class="col-sm-12">
            Submit thesis
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <form class="form-horizontal" @submit.prevent="search">
            <h3>Thesis Information</h3>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('paperTitle')}">
              <label class="control-label" for="paperTitle">Paper Title</label>
              <p class="control has-icon has-icon-right">
                <textarea  rows="5" v-model="paperTitle" name="paperTitle" v-validate="'required'" class="input form-control" type="text" placeholder="Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference" required></textarea>
                <i v-show="errors.has('paperTitle')" class="fa fa-warning"></i>
                <span v-show="errors.has('paperTitle')" class="help text-error">{{ errors.first('paperTitle') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('abstract')}">
              <label class="control-label" for="abstract">Abstract</label>
              <p class="control has-icon has-icon-right">
                <textarea  rows="8" v-model="abstract" name="abstract" v-validate="'required'" class="input form-control" type="text" placeholder="Probabilistic Reasoning in Intelligent Systems is a complete and accessible account of the ..." required></textarea>
                <i v-show="errors.has('abstract')" class="fa fa-warning"></i>
                <span v-show="errors.has('abstract')" class="help text-error">{{ errors.first('abstract') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('keywords')}">
              <label class="control-label" for="keywords">Keywords</label>
              <p class="control has-icon has-icon-right">
                <input-tag :tags.sync="keywords" :limit="10" validate="text" v-model="keywords" name="keywords"  v-validate="'required'" required></input-tag>
                <i v-show="errors.has('keywords')" class="fa fa-warning"></i>
                <span v-show="errors.has('keywords')" class="help text-error">{{ errors.first('keywords')}}</span>
              </p>
              <span class="small">
                * tab to add new keyword (max 10)
              </span>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('attachment')}">
              <label class="control-label" for="keywords">Attachments</label>
              <div class="control has-icon has-icon-right">
              <div class="dropbox">
                <input id="file-input" type="file" multiple @change="filesChange($event.target.name, $event.target.files)" class="input-file">
                  <p v-if="!haveFile">
                    Drag your file(s) here to begin<br> or click to browse
                  </p>
                  <div v-if="haveFile" >
                    <ul classs="list-group list-group-body">
                      <li class="list-group-item" v-for="file in this.currentFiles" v-bind:key="file.name">
                        <div class="col-xs-6 text-left" style=" "> <a><span class="glyphicon glyphicon-file" aria-hidden="true"></span>{{file.name}} </a> </div>
                        <div class="col-xs-3" style="">{{file.size/1000}} KB</div>
                        <div class="col-xs-3" style="">{{formatDate(file.lastModified)}}</div>
                      </li>
                    </ul>
                  </div>
                </div>
                <i v-show="errors.has('attachment')" class="fa fa-warning"></i>
                <span v-show="errors.has('attachment')" class="help text-error">{{ errors.first('attachment')}}</span>
              </div>
            </div>
            <h3>Team Leader</h3>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('title1')}">
              <label class="control-label" for="title1">Title</label>
              <select v-model="title1" class="form-control" name="title1" options="titles" v-validate="'required'">
                <option disabled value="">Select title</option>
                <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                  {{ option.text }}
                </option>
              </select>
              <i v-show="errors.has('title1')" class="fa fa-warning"></i>
              <span v-show="errors.has('title1')" class="help text-error">{{ errors.first('title1') }}</span>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('firstName1')}">
              <label class="control-label" for="firstName1">First Name</label>
              <p class="control has-icon has-icon-right">
                <input v-model="firstName1" v-validate="'required'" name="firstName1" class="input form-control" type="text" placeholder="John">
                <i v-show="errors.has('firstName1')" class="fa fa-warning"></i>
                <span v-show="errors.has('firstName1')" class="help text-error">{{ errors.first('firstName1') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'has-error': errors.has('middleName1')}">
                <label class="control-label" for="middleName1">Middle Name</label>
                <input v-model="middleName1" name="middleName1" class="input form-control" type="text" placeholder="Smith" required>
                <i v-show="errors.has('middleName1')" class="fa fa-warning"></i>
                <span v-show="errors.has('middleName1')" class="help text-error">{{ errors.first('middle name') }}</span>
              </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('lastName1')}">
              <label class="control-label" for="lastName1">Last Name</label>
              <p class="control has-icon has-icon-right">
                <input v-model="lastName1" v-validate="'required'" name="lastName1" class="input form-control" type="text" placeholder="Doe">
                <i v-show="errors.has('lastName1')" class="fa fa-warning"></i>
                <span v-show="errors.has('lastName1')" class="help text-error">{{ errors.first('lastName1') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('email1')}">
              <label class="control-label" for="email1">Email</label>
              <p class="control has-icon has-icon-right">
                <input v-model="email1" name="email1" v-validate="'required|email'" class="input form-control" type="text" placeholder="john.d@institute.edu" required>
                <i v-show="errors.has('email1')" class="fa fa-warning"></i>
                <span v-show="errors.has('email1')" class="help text-error">{{ errors.first('email1') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('phone1')}">
              <label class="control-label" for="phone1">Phone No</label>
              <p class="control has-icon has-icon-right">
                <input v-model="phone1" name="phone1" v-validate="'required'" class="input form-control" type="text" placeholder="+662XXXXXXX" required>
                <i v-show="errors.has('phone1')" class="fa fa-warning"></i>
                <span v-show="errors.has('phone1')" class="help text-error">{{ errors.first('phone1') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'has-error': errors.has('food1')}">
                <label class="control-label" for="food1">Food Allergies/Condition</label>
                <input v-model="food1" name="food1" class="input form-control" type="text" placeholder="allergic to shrimp" required>
                <i v-show="errors.has('food1')" class="fa fa-warning"></i>
                <span v-show="errors.has('food1')" class="help text-error">{{ errors.first('food') }}</span>
            </div>
            <h3  data-toggle="collapse" data-target="#secondMember">Second member<i class="fa fa-angle-down fa-lg white-text  mr-3 "></i></h3>
            <div id="secondMember" class="panel-collapse collapse in" >
              <div :class="{'form-group': true, 'required':false, 'has-error': errors.has('title2')}">
                <label class="control-label" for="title2">Title</label>
                <select v-model="title2" class="form-control" name="title2" options="titles">
                  <option disabled value="">Select title</option>
                  <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                    {{ option.text }}
                  </option>
                </select>
                <i v-show="errors.has('title2')" class="fa fa-warning"></i>
                <span v-show="errors.has('title2')" class="help text-error">{{ errors.first('title2') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('firstName2')}">
                <label class="control-label" for="firstName2">First Name</label>
                <input v-model="firstName2" name="firstName2" class="input form-control" type="text" placeholder="John" required>
                <i v-show="errors.has('firstName2')" class="fa fa-warning"></i>
                <span v-show="errors.has('firstName2')" class="help text-error">{{ errors.first('First Name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('middleName2')}">
                <label class="control-label" for="middleName2">Middle Name</label>
                <input v-model="middleName2" name="middleName2" class="input form-control" type="text" placeholder="Smith" required>
                <i v-show="errors.has('middleName2')" class="fa fa-warning"></i>
                <span v-show="errors.has('middleName2')" class="help text-error">{{ errors.first('middle name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('lastName2')}">
                <label class="control-label" for="lastName2">Last Name</label>
                <input v-model="lastName2" name="lastName2" class="input form-control" type="text" placeholder="Doe" required>
                <i v-show="errors.has('lastName2')" class="fa fa-warning"></i>
                <span v-show="errors.has('lastName2')" class="help text-error">{{ errors.first('last name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('email2')}">
                <label class="control-label" for="email2">Email</label>
                <input v-model="email2" name="email2" class="input form-control" type="text" placeholder="john.d@institute.edu" required>
                <i v-show="errors.has('email2')" class="fa fa-warning"></i>
                <span v-show="errors.has('email2')" class="help text-error">{{ errors.first('email') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('phone2')}">
                <label class="control-label" for="phone2">Phone No</label>
                <input v-model="phone2" name="phone2" class="input form-control" type="text" placeholder="+662XXXXXXX" required>
                <i v-show="errors.has('phone2')" class="fa fa-warning"></i>
                <span v-show="errors.has('phone2')" class="help text-error">{{ errors.first('phone') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('food2')}">
                <label class="control-label" for="food2">Food Allergies/Condition</label>
                <input v-model="food2" name="food2" class="input form-control" type="text" placeholder="allergic to shrimp" required>
                <i v-show="errors.has('food2')" class="fa fa-warning"></i>
                <span v-show="errors.has('food2')" class="help text-error">{{ errors.first('food') }}</span>
              </div>
            </div>
            <h3 data-toggle="collapse" data-target="#thirdMember">Third member<i class="fa fa-angle-down fa-lg white-text  mr-3 "></i></h3>
            <div :id="'thirdMember'" class="panel-collapse collapse in">
              <div :class="{'form-group': true, 'required':false, 'has-error': errors.has('title3')}">
                <label class="control-label" for="title3">Title</label>
                <select v-model="title3" class="form-control" name="title3" options="titles">
                  <option disabled value="">Select title</option>
                  <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                    {{ option.text }}
                  </option>
                </select>
                <i v-show="errors.has('title3')" class="fa fa-warning"></i>
                <span v-show="errors.has('title3')" class="help text-error">{{ errors.first('title3') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('firstName3')}">
                <label class="control-label" for="firstName3">First Name</label>
                <input v-model="firstName3" name="firstName3" class="input form-control" type="text" placeholder="John" required>
                <i v-show="errors.has('firstName3')" class="fa fa-warning"></i>
                <span v-show="errors.has('firstName3')" class="help text-error">{{ errors.first('First Name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('middleName3')}">
                <label class="control-label" for="middleName3">Middle Name</label>
                <input v-model="middleName3" name="middleName3" class="input form-control" type="text" placeholder="Smith" required>
                <i v-show="errors.has('middleName3')" class="fa fa-warning"></i>
                <span v-show="errors.has('middleName3')" class="help text-error">{{ errors.first('middle name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('lastName3')}">
                <label class="control-label" for="lastName3">Last Name</label>
                <input v-model="lastName3" name="lastName3" class="input form-control" type="text" placeholder="Doe" required>
                <i v-show="errors.has('lastName3')" class="fa fa-warning"></i>
                <span v-show="errors.has('lastName3')" class="help text-error">{{ errors.first('last name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('email3')}">
                <label class="control-label" for="email3">Email</label>
                <input v-model="email3" name="email3" class="input form-control" type="text" placeholder="john.d@institute.edu" required>
                <i v-show="errors.has('email3')" class="fa fa-warning"></i>
                <span v-show="errors.has('email3')" class="help text-error">{{ errors.first('email') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('phone3')}">
                <label class="control-label" for="phone3">Phone No</label>
                <input v-model="phone3" name="phone3" class="input form-control" type="text" placeholder="+662XXXXXXX" required>
                <i v-show="errors.has('phone3')" class="fa fa-warning"></i>
                <span v-show="errors.has('phone3')" class="help text-error">{{ errors.first('phone') }}</span>
              </div>
            </div>
            <div :class="{'form-group': true, 'has-error': errors.has('food3')}">
                <label class="control-label" for="food3">Food Allergies/Condition</label>
                <input v-model="food3" name="food3" class="input form-control" type="text" placeholder="allergic to shrimp" required>
                <i v-show="errors.has('food3')" class="fa fa-warning"></i>
                <span v-show="errors.has('food3')" class="help text-error">{{ errors.first('food') }}</span>
            </div>
            <!-- <h3 data-toggle="collapse" data-target="#fourthMember">Fourth member<i class="fa fa-angle-down fa-lg white-text  mr-3 "></i></h3>
            <div :id="'fourthMember'" class="panel-collapse collapse in">
              <div :class="{'form-group': true, 'required':false, 'has-error': errors.has('title4')}">
                <label class="control-label" for="title4">Title</label>
                <select v-model="title4" class="form-control" name="title4" options="titles">
                  <option disabled value="">Select title</option>
                  <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                    {{ option.text }}
                  </option>
                </select>
                <i v-show="errors.has('title4')" class="fa fa-warning"></i>
                <span v-show="errors.has('title4')" class="help text-error">{{ errors.first('title4') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('firstName4')}">
                <label class="control-label" for="firstName4">First Name</label>
                <input v-model="firstName4" name="firstName4" class="input form-control" type="text" placeholder="John" required>
                <i v-show="errors.has('firstName4')" class="fa fa-warning"></i>
                <span v-show="errors.has('firstName4')" class="help text-error">{{ errors.first('First Name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('middleName4')}">
                <label class="control-label" for="middleName4">Middle Name</label>
                <input v-model="middleName4" name="middleName4" class="input form-control" type="text" placeholder="Smith" required>
                <i v-show="errors.has('middleName4')" class="fa fa-warning"></i>
                <span v-show="errors.has('middleName4')" class="help text-error">{{ errors.first('middle name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('lastName4')}">
                <label class="control-label" for="lastName4">Last Name</label>
                <input v-model="lastName4" name="lastName4" class="input form-control" type="text" placeholder="Doe" required>
                <i v-show="errors.has('lastName4')" class="fa fa-warning"></i>
                <span v-show="errors.has('lastName4')" class="help text-error">{{ errors.first('last name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('email4')}">
                <label class="control-label" for="email4">Email</label>
                <input v-model="email4" name="email4" class="input form-control" type="text" placeholder="john.d@institute.edu" required>
                <i v-show="errors.has('email4')" class="fa fa-warning"></i>
                <span v-show="errors.has('email4')" class="help text-error">{{ errors.first('email') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('phone4')}">
                <label class="control-label" for="phone4">Phone No</label>
                <input v-model="phone4" name="phone4" class="input form-control" type="text" placeholder="+662XXXXXXX" required>
                <i v-show="errors.has('phone4')" class="fa fa-warning"></i>
                <span v-show="errors.has('phone4')" class="help text-error">{{ errors.first('phone') }}</span>
              </div>
            </div>
            <h3 data-toggle="collapse" data-target="#fifththMember">Fifth member<i class="fa fa-angle-down fa-lg white-text  mr-3 "></i></h3>
            <div :id="'fifththMember'" class="panel-collapse collapse in">
              <div :class="{'form-group': true, 'required':false, 'has-error': errors.has('title5')}">
                <label class="control-label" for="title5">Title</label>
                <select v-model="title5" class="form-control" name="title5" options="titles">
                  <option disabled value="">Select title</option>
                  <option v-for="option in titles" v-bind:value="option.value" v-bind:key="option.value">
                    {{ option.text }}
                  </option>
                </select>
                <i v-show="errors.has('title5')" class="fa fa-warning"></i>
                <span v-show="errors.has('title5')" class="help text-error">{{ errors.first('title5') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('firstName5')}">
                <label class="control-label" for="firstName5">First Name</label>
                <input v-model="firstName5" name="firstName5" class="input form-control" type="text" placeholder="John" required>
                <i v-show="errors.has('firstName5')" class="fa fa-warning"></i>
                <span v-show="errors.has('firstName5')" class="help text-error">{{ errors.first('First Name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('middleName5')}">
                <label class="control-label" for="middleName5">Middle Name</label>
                <input v-model="middleName5" name="middleName5" class="input form-control" type="text" placeholder="Smith" required>
                <i v-show="errors.has('middleName5')" class="fa fa-warning"></i>
                <span v-show="errors.has('middleName5')" class="help text-error">{{ errors.first('middle name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('lastName5')}">
                <label class="control-label" for="lastName5">Last Name</label>
                <input v-model="lastName5" name="lastName5" class="input form-control" type="text" placeholder="Doe" required>
                <i v-show="errors.has('lastName5')" class="fa fa-warning"></i>
                <span v-show="errors.has('lastName5')" class="help text-error">{{ errors.first('last name') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('email5')}">
                <label class="control-label" for="email5">Email</label>
                <input v-model="email5" name="email5" class="input form-control" type="text" placeholder="john.d@institute.edu" required>
                <i v-show="errors.has('email5')" class="fa fa-warning"></i>
                <span v-show="errors.has('email5')" class="help text-error">{{ errors.first('email') }}</span>
              </div>
              <div :class="{'form-group': true, 'has-error': errors.has('phone5')}">
                <label class="control-label" for="phone5">Phone No</label>
                <input v-model="phone5" name="phone5" class="input form-control" type="text" placeholder="+662XXXXXXX" required>
                <i v-show="errors.has('phone5')" class="fa fa-warning"></i>
                <span v-show="errors.has('phone5')" class="help text-error">{{ errors.first('phone') }}</span>
              </div>
              <br>
            </div> -->
            <h3>General Infomation</h3>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('teamName')}">
              <label class="control-label" for="teamName">Team Name</label>
              <p class="control has-icon has-icon-right">
                <input v-model="teamName" name="teamName" v-validate="'required'" class="input form-control" type="text" placeholder="The Legend" required>
                <i v-show="errors.has('teamName')" class="fa fa-warning"></i>
                <span v-show="errors.has('teamName')" class="help text-error">{{ errors.first('teamName') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('institution')}">
              <label class="control-label" for="institution">Institution</label>
              <p class="control has-icon has-icon-right">
                <input v-model="institution" name="institution" v-validate="'required'" class="input form-control" type="text" placeholder="John S. Doe Institute of Technology" required>
                <i v-show="errors.has('institution')" class="fa fa-warning"></i>
                <span v-show="errors.has('institution')" class="help text-error">{{ errors.first('institution') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('department')}">
              <label class="control-label" for="department">Department</label>
                <p class="control has-icon has-icon-right">
                  <input v-model="department" name="department" v-validate="'required'" class="input form-control" type="text" placeholder="School of Computer Science" required>
                  <i v-show="errors.has('department')" class="fa fa-warning"></i>
                  <span v-show="errors.has('department')" class="help text-error">{{ errors.first('department') }}</span>
                </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('maillingAddress1')}">
              <label class="control-label" for="maillingAddress1">Address Line 1</label>
                <p class="control has-icon has-icon-right">
                  <textarea v-model="maillingAddress1" name="maillingAddress1" v-validate="'required'" class="input form-control" type="text" placeholder="House Number, Street" required rows=3></textarea>
                  <i v-show="errors.has('maillingAddress1')" class="fa fa-warning"></i>
                  <span v-show="errors.has('maillingAddress1')" class="help text-error">{{ errors.first('Mailling Address 1') }}</span>
                </p>
            </div>
            <div :class="{'form-group': true, 'has-error': errors.has('maillingAddress2')}">
              <label class="control-label" for="maillingAddress2">Address Line 2</label>
              <input v-model="maillingAddress2" name="maillingAddress2" class="input form-control" type="text" placeholder="Building, Suite/Room/Flat No." required>
              <i v-show="errors.has('maillingAddress2')" class="fa fa-warning"></i>
              <span v-show="errors.has('maillingAddress2')" class="help text-error">{{ errors.first('Name On Badge') }}</span>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('city')}">
              <label class="control-label" for="city">City</label>
              <p class="control has-icon has-icon-right">
                <input v-model="city" name="city" v-validate="'required'" class="input form-control" type="text" placeholder="Wangchan" required>
                <i v-show="errors.has('city')" class="fa fa-warning"></i>
                <span v-show="errors.has('city')" class="help text-error">{{ errors.first('city') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('province')}">
              <label class="control-label" for="province">State/Province/District</label>
              <p class="control has-icon has-icon-right">
                <input v-model="province" name="province" v-validate="'required'" class="input form-control" type="text" placeholder="Rayong" required>
                <i v-show="errors.has('province')" class="fa fa-warning"></i>
                <span v-show="errors.has('province')" class="help text-error">{{ errors.first('province') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('postalCode')}">
              <label class="control-label" for="postalCode">Postal Code</label>
              <p class="control has-icon has-icon-right">
                <input v-model="postalCode" name="postalCode" v-validate="'required|numeric'" class="input form-control" type="text" placeholder="21210" required>
                <i v-show="errors.has('postalCode')" class="fa fa-warning"></i>
                <span v-show="errors.has('postalCode')" class="help text-error">{{ errors.first('postalCode') }}</span>
              </p>
            </div>
            <div :class="{'form-group': true, 'required': true, 'has-error': errors.has('country')}">
              <label class="control-label" for="country">Country</label>
              <p class="control has-icon has-icon-right">
                <input v-model="country" name="country" v-validate="'required'" class="input form-control" type="text" placeholder="Thailand" required>
                <i v-show="errors.has('country')" class="fa fa-warning"></i>
                <span v-show="errors.has('country')" class="help text-error">{{ errors.first('country') }}</span>
              </p>
            </div>
          </form>
        </div>
      </div>
     <button type="button" class="btn btn-lg btn-primary btn-block mb-3" data-toggle="modal" data-target=".bs-example-modal-sm" v-on:click="submit()">Submit</button>
    </div>
    <cs-footer></cs-footer>
  </div>
</template>

<script>
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
import axios from 'axios'
import moment from 'moment'
import InputTag from 'vue-input-tag'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import Navbar from '@/components/Forms/Navbar'
import CsFooter from '@/components/Home/Footer'

const BASE_URL = 'https://api.ivaa.space/api/'

export default {
  components: {
    Navbar,
    CsFooter,
    'date-picker': myDatepicker,
    InputTag,
    'vue-dropzone': vue2Dropzone
  },
  name: 'Submit',
  data () {
    return {
      participantCategory: '',
      participantCategories: {
      },
      titles: [
        { text: 'Prof', value: 'Prof' },
        { text: 'Dr', value: 'Dr' },
        { text: 'Mr', value: 'Mr' },
        { text: 'Mrs', value: 'Mrs' },
        { text: 'Miss', value: 'Miss' }
      ],
      title1: '',
      firstName1: '',
      middleName1: '',
      lastName1: '',
      email1: '',
      phone1: '',
      food1: '',
      title2: '',
      firstName2: '',
      middleName2: '',
      lastName2: '',
      email2: '',
      phone2: '',
      food2: '',
      title3: '',
      firstName3: '',
      middleName3: '',
      lastName3: '',
      email3: '',
      phone3: '',
      food3: '',
      title4: '',
      firstName4: '',
      middleName4: '',
      lastName4: '',
      email4: '',
      phone4: '',
      title5: '',
      firstName5: '',
      middleName5: '',
      lastName5: '',
      email5: '',
      phone5: '',
      teamName: '',
      institution: '',
      department: '',
      maillingAddress1: '',
      maillingAddress2: '',
      city: '',
      province: '',
      postalCode: '',
      country: '',
      abstract: '',
      paperTitle: '',
      keywords: [],
      attachment: '',
      currentFiles: [],
      option: {
        format: 'DD-MM-YYYY'
      },
      submitForm: null,
      dropzoneOptions: {
        url: 'https://api.ivaa.space/upload',
        thumbnailWidth: 150,
        maxFilesize: 500,
        headers: {
          'Cache-Control': '',
          'X-Requested-With': ''
        },
        addRemoveLinks: true,
        autoProcessQueue: true,
        params: {
          teamName: '',
          university: ''
        }
      },
      haveFile: false
    }
  },
  computed: {
    currentTeamName () {
      return this.teamName
    }
  },
  props: {
    loggingIn: {
      default: false
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('MMMM Do YYYY')
    },
    postPost () {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log('in')
          axios.post(BASE_URL + 'submissions', {
            title1: this.title1,
            firstName1: this.firstName1,
            middleName1: this.middleName1,
            lastName1: this.lastName1,
            email1: this.email1,
            phone1: this.phone1,
            title2: this.title2,
            firstName2: this.firstName2,
            middleName2: this.middleName2,
            lastName2: this.lastName2,
            email2: this.email2,
            phone2: this.phone2,
            title3: this.title3,
            firstName3: this.firstName3,
            middleName3: this.middleName3,
            lastName3: this.lastName3,
            email3: this.email3,
            phone3: this.phone3,
            title4: this.title4,
            firstName4: this.firstName4,
            middleName4: this.middleName4,
            lastName4: this.lastName4,
            email4: this.email4,
            phone4: this.phone4,
            title5: this.title5,
            firstName5: this.firstName5,
            middleName5: this.middleName5,
            lastName5: this.lastName5,
            email5: this.email5,
            phone5: this.phone5,
            teamName: this.teamName,
            institution: this.institution,
            department: this.department,
            maillingAddress1: this.maillingAddress1,
            maillingAddress2: this.maillingAddress2,
            city: this.city,
            province: this.province,
            postalCode: this.postalCode,
            country: this.country,
            abstract: this.abstract,
            paperTitle: this.paperTitle,
            keywords: this.keywords
          })
            .then(response => {
              console.log(response)
              console.log('send')
            })
            .catch(e => {
              console.log(e)
            })
          return
        }
      })
    },
    submit () {
      this.postPost()
      this.upload(this.submitForm)
    },
    upload (formData) {
      let url = `https://api.ivaa.space/upload`
      this.uploading = true
      axios.post(url, formData, {
        timeout: 50000000
      })
      // get data
      .then(response => {
        console.log(response.data)
        alert('Submit successful, Thank You')
      })
    },
    filesChange (fieldName, fileList) {
      this.currentFiles = fileList
      console.log(fileList)
      // handle file changes
      const formData = new FormData()

      if (!fileList.length) {
        this.haveFile = false
        return
      }
      this.haveFile = true
      // append the files to FormData
      Array
      .from(Array(fileList.length).keys())
      .map(x => {
        formData.append('files', fileList[x], fileList[x].name)
      })
      formData.append('teamName', this.teamName)
      formData.append('university', this.institution)
      // save it
      this.submitForm = formData
    }
  },
  watch: {
    teamName () {
      this.dropzoneOptions.params.teamName = this.teamName
    },
    institution () {
      this.dropzoneOptions.params.university = this.institution
    }
  },
  created () {
  }
}
</script>

<style scoped>
header {
  background: linear-gradient(-90deg, rgb(88, 46, 145), rgb(160, 34, 58));
  color: rgba(255,255,255,1);
  font-size: 4rem;
  line-height: 4rem;
}

.btn-primary {
  background: linear-gradient(-90deg, rgb(88, 46, 145), rgb(160, 34, 58));
  font-weight: 600;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    color: dimgray;
    background: linear-gradient(-90deg, rgba(88, 46, 145, 0.3), rgba(160, 34, 58, 0.3));
    padding: 10px 10px;
    position: relative;
    cursor: pointer;
    height: 15rem;
  }

  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    position: absolute;
    cursor: pointer;
  }

  .dropbox:hover, .dropbox:focus {
    background: linear-gradient(-90deg, rgba(88, 46, 145, 0.2), rgba(160, 34, 58, 0.2));
  }

  .dropbox p {
    font-size: 1em;
    text-align: center;
    padding-top: 5.5rem;
  }

  #file-input {
    height: 100%;
  }
</style>
