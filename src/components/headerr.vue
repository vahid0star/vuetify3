<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top d-flex flex-row-reverse " id="nav">
    <button class=" navbar-toggler navbar-dark bg-dark" type="button" data-toggle="collapse" data-target="#navbar-responsive">
      <span class="  navbar-toggler-icon"></span>
    </button>
    <div class=" collapse navbar-collapse" id="navbar-responsive">
      <v-list align="center" class="mx-10 flex-md-row-reverse navbar-nav ml-auto bg-dark">
        <li class="nav-item">
          <a class="nav-link text-light flex-md-row-reverse" title="خانه" href="/index.html">خانه</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light flex-md-row-reverse" title="محصولات" href="/menu/محصولات.html">محصولات</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" title="باشگاه" href="/menu/باشگاه مشتریان/لباس+مناسب+در+فصل+تابستان.html">باشگاه مشتریان</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" title="سوالات متداول" href="/menu/سوالات متداول.html">سوالات متداول</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" title="درباره ما" href="/index.html#About">درباره ی ما</a>
        </li>
      </v-list>
    </div>
    <a class=" nav-link text-light  fas fa-dungeon " style="font-size: 1.5rem;" href="#" title="home">  MAHVA</a>
    <a class="navbar-brand" href="#" title="MAHVA-logo"><img class="img-fluid" src="/src/assets/lego_mahva-removebg.png" width="60" alt="لوگوی محوا "></a>
  </nav>
</template>





<script>
 export default {
    data: () => ({
      items: [
        {
          name: 'Item #1',
          id: 1,
        },
        {
          name: 'Item #2',
          id: 2,
        },
        {
          name: 'Item #3',
          id: 3,
        },
      ],
    }),
  }

</script>