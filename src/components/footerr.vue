<template>
  <section class="credit text-light bg-dark flex-md-row-reverse">
    <div class="container-fluid flex-md-row-reverse">
      <div class="row align-items-center py-1 text-center flex-md-row-reverse">
        <div class="col-md-6 col-lg-4 my-2 flex-md-row-reverse">
          <img src="/src/assets/lego_mahva-removebg1.png" alt="ققنوس محوا" class="img-fluid" style="max-width: 40%;">
      </div>
          <div class="col-md-6 col-lg-8 text-center text-light">
            <div v-for="(post, i) in posts"
        :key="i">
        <p>محوا تولید کننده و صادرکننده پیراهن های اداری در رنگ ها و سایز های مختلف با بالاترین کیفیت است. هدف ما در محوا ارتقای کیفیت دوخت پیراهن های مردانه ،ایجاد تغییرات در جهت آراستگی ظاهری و بهینه سازی در هزینه ها و رقابت با بازار خارجی است </p>
        <p class="mt-n3" v-if="post.readMore">{{post.title}}</p>
        <v-btn closable 
      @click:close="chip = false" rounded="xl" color="light-blue-lighten-5" class="font-weight-black text-body-1 text-dark" v-if="!readActivated" @click="post.readMore = !post.readMore">بیشتر بخوانید</v-btn>
            </div>
          </div>
        </div>
  </div>


    <div class="bottom" style="background: #151515">
      <center>
      <span class="credit text-light">تمامی حقوق مادی و معنوی این سایت متعلق به تولیدی <a href="https://www.mahvaa.ir" title="www.mahvaa.ir">محوا</a> می باشد هر گونه کپی برداری ممنوع بوده و پیگرد قانونی دارد </span>
      </center>
  </div>
  </section>

</template>

<script>

export default {
  data: () => ({
    posts: [
      {title: 'از آنجا که ما معتقدیم محوا باید تولید کننده ی خوبی باشد، ما محصولاتی با مواد بهتر ارائه می کنیم و تلاش می کنیم تاثیر مثبتی در راستای انتخاب مردم داشته باشیم.یکی از استراتژی های کلیدی بازاریابی محوا ایجاد هویت منحصر به فرد برای هر ایرانی است', readMore: false},
      ],
    }),
  }

</script>