<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
            <a class="list-group-item list-gourp-item-action">Ordering History</a>
          </router-link>

          <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
            <a class="list-group-item list-gourp-item-action">Contact Us</a>
          </router-link>

          <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
            <a class="list-group-item list-gourp-item-action">Ordering Guide</a>
          </router-link>

          <router-link tag="li" class="nav-link" :to="{name:'deliveryLink'}">
            <a class="list-group-item list-gourp-item-action">Delivery Information</a>
          </router-link>

        </div>

        <div class="col-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
