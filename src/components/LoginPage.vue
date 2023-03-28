<template>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Homa Bay County</title>

    <link rel="stylesheet" href="/css/icon_fonts/css/icon_set_1.css">
    <link rel="stylesheet" href="/css/icon_fonts/css/icon_set_1.css">
    <link rel="stylesheet" href="/css/icon_fonts/css/icon_set_2.css">
    <link rel="stylesheet" href="/css/icon_fonts/css/icon_set_3.css">
    <link rel="stylesheet" href="/css/icon_fonts/css/icon_set_4.css">

    <link rel="stylesheet" href="/css/icons.min.css">


    <link rel="stylesheet" href="/vendors/OwlCarousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="/vendors/OwlCarousel/assets/owl.theme.default.css">
    <link rel="stylesheet" href="/css/flaticon-font/flaticon.css">

    <link rel="stylesheet" href="/vendors/material-design-iconic-font/css/material-design-iconic-font.min.css">
    <link rel="stylesheet" href="/vendors/animate.css/animate.min.css">
    <link rel="stylesheet" href="/vendors/jquery-scrollbar/jquery.scrollbar.css">
    <link rel="stylesheet" href="/vendors/fullcalendar/fullcalendar.min.css">
    <link rel="stylesheet" href="/vendors/select2/css/select2.min.css">
    <link rel="stylesheet" href="/vendors/dropzone/dropzone.css">
    <link rel="stylesheet" href="/vendors/nouislider/nouislider.min.css">
    <link rel="stylesheet" href="/vendors/trumbowyg/ui/trumbowyg.min.css">
    <link rel="stylesheet" href="/vendors/flatpickr/flatpickr.min.css" />
    <link rel="stylesheet" href="/vendors/rateyo/jquery.rateyo.min.css">
    <link rel="stylesheet" href="/vendors/bootstrap-colorpicker/css/bootstrap-colorpicker.min.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">


    <link rel="stylesheet" href="/css/app.min.css">
    <link rel="stylesheet" href="/css/daterangepicker.css">


  </head>

  <body data-ma-theme="green">
  <main class="main">
    <section>
      <div class="login-content fluid-container">
        <div class="row">
          <div class=" col-md-6 col-lg-5 d-flex justify-content-center dont-display-small">
                            <span class="login-img-container">
                               <img src="/demo/img/gallery/login-image.svg" class=""></span>
          </div>

          <div class="col-sm-12 col-md-12 col-lg-6">
            <form action=""  enctype="application/x-www-form-urlencoded" id="searchSuppliers" method="POST"
                  class="login-form bg-white w-100">
              <div class="login-form-header p-1">

                <h2 class="mb-2">Login</h2>


              </div>
              <div class="form-group">
                <label>
                  <strong>Email</strong>  <strong class="text-danger">*</strong>
                </label>
                <div class="input-email-login">
                  <input v-model="contact.email" name="userName" type="email" class="form-control" placeholder="Enter your email address" required>
                </div>
              </div>

              <div class="form-group">
                <label>
                  <strong>Password</strong>  <strong class="text-danger">*</strong>
                </label>
                <div class="input-pass-login">
                  <input v-model="password" name="password" type="password" class="form-control" placeholder="Enter your password" required>
                </div>
              </div>

              <div class="alert alert-success" role="alert" v-if="alert.success">
               {{message}}
              </div>

              <div class="alert alert-primary" role="alert" v-if="alert.info">
               {{message}}
              </div>

              <div class="alert alert-danger" role="alert" v-if="alert.failed">
                {{message}}
              </div>

              <input type="submit" class="btn btn-primary block center btn-block mb-3 py-2 btn-control d-none" value="Login">
              <a @click="login()" class="btn btn-primary block center btn-block mb-3 py-2 btn-control">Login</a>


              <div>
                <a class="text-center" href="/" >Forgot Password</a>
              </div>
            </form>

            <p class="text-center mt-4 d-none"> Powered by <strong><a href="https://www.nationalbank.co.ke/" target="new">Craft Silicon</a></strong></p>

          </div>
        </div>
      </div>
    </section>
  </main>
  </body>

</template>

<script>
import router from "@/router";
import {authLocal, execute} from "@/api";
import useVuelidate from "@vuelidate/core";
import { required, email } from '@vuelidate/validators'

export default {
  name: "LoginPage",
  setup () {
    return { v$: useVuelidate() }
  },
  data(){
    return{
      message:'',
      alert:{
        success: false,
        info: false,
        failed:false
      },
      contact: {
        email: ''
      },
      password:''
    }
  },
  validations(){
    return{
      contact: {
        email: { required, email } // Matches this.contact.email
      },
      password:{required}
    }
  },
  mounted() {
  },
  methods:{
    login(){
      this.message ="Authorizing..."
      this.alert.failed = false
      this.alert.info = true
      const data = new FormData();
      data.append("function", "login");
      data.append("email", this.contact.email);
      data.append("password", this.password);

      execute(data,authLocal)
          .then((res) =>{
            this.alert.info = false
                if (res.data.success) {
                  this.message =res.data.message
                  this.alert.success = true
                  router.push('home-page')
                }else{
                  this.alert.failed = true
                  this.message =res.data.message
                }
          })
          .catch((e) => {
            //alert(e.message);
            this.message =e.message
          });
    },

  }
}
</script>


