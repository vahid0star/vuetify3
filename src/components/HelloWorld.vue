<template>

 <!-- <div class="bg-light py-5" id="collection"> -->
<v-row class="mt-15" justify="center">
      <v-col class="mt-10" cols="auto">
        <v-btn class="mx-1 mt-12 font-weight-black text-body-1 " @click="itemss=items"
        elevation="24"
        rounded="xl"
        color="light-blue-lighten-5"
        variant="flat">تک رنگ</v-btn>
        <v-btn class="mx-1 mt-12 font-weight-black text-body-1 " @click="itemss=items1" 
        elevation="24"
        rounded="xl"
        color="light-blue-lighten-5"
        variant="flat">چهارخانه</v-btn>
      </v-col>
</v-row>
  <v-container class="my-5">
    <v-row justify="center">
      <v-card width="350" class=" mx-lg-5 my-lg-8 my-8 "
        
        v-for="(item, i) in itemss"
        :key="i"
        :value="item"
        >
    <v-card-item>
      <v-img height="480" :src="item.icon" :alt="item.text" :title="item.text"
      :lazy-src="`/src/assets/lego_mahva-removebg.png`"
      aspect-ratio="1"
      
      ></v-img>
      
      <div class="font-weight-black text-h5 text-center">{{item.text}}</div>
      <p class="text-body1 text-center my-6">پیراهن آستین بلند جنس پارچه تترون کیفیت صادراتی در سایزهای M و L و XL و XXL</p>
    </v-card-item>
  </v-card>
  </v-row>
</v-container>
</template>


<script>
export default {
    data: () => ({
      items: [
        { text: 'پیراهن طوسی محوا', icon: '/src/assets/single/tosi.jpg' },
        { text: 'پیراهن مشکی محوا', icon: '/src/assets/single/black.jpg' },
        { text: 'پیراهن زرشکی محوا', icon: '/src/assets/single/red.jpg' },
        { text: 'پیراهن سفید محوا', icon: '/src/assets/single/white.jpg' },
        { text: 'پیراهن سبزآبی محوا', icon: '/src/assets/single/phosphori.jpg' },
        { text: 'پیراهن یاسی محوا', icon: '/src/assets/single/yasi.jpg' },
        { text: 'پیراهن لیمویی محوا', icon: '/src/assets/single/limo.jpg' },
        { text: 'پیراهن قهوه ای محوا', icon: '/src/assets/single/brown.jpg' },
        { text: 'پیراهن کرم محوا', icon: '/src/assets/single/cream.jpg' },
        { text: 'پیراهن نسکافه ای  محوا', icon: '/src/assets/single/lightbrown.jpg' },
        { text: 'پیراهن سورمه ای محوا', icon: '/src/assets/single/sormei.jpg' },

      ],
      items1: [
        { text: 'پیراهن چهارخانه سبزآبی محوا', icon: '/src/assets/single/sabzabi-d.jpg' },
        { text: 'پیراهن چهارخانه قرمزسفید محوا', icon: '/src/assets/single/abired.jpg' },
        { text: 'پیراهن چهارخانه سبزآبی محوا', icon: '/src/assets/single/sabzabi-r.jpg' },
      
      ],
      itemss: [
      { text: 'پیراهن زرشکی محوا', icon: '/src/assets/single/red.jpg' },
      { text: 'پیراهن مشکی محوا', icon: '/src/assets/single/black.jpg' },
      { text: 'پیراهن کرم محوا', icon: '/src/assets/single/cream.jpg' },

      ],
    }),
  }
</script>