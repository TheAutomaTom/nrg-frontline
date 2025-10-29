<template>
  <n-config-provider :theme="darkTheme">
    <div class="w-screen h-dvh flex flex-col">
      <!-- Scrollable area, padded so content never hides under the fixed footer -->
      <n-layout class="flex-1 min-h-0 overflow-auto pb-(--footer-h)">
        <n-layout-header class="h-12 shrink-0  shadow-sm flex items-center px-4">
          Header
        </n-layout-header>

        <n-layout-content class="min-h-[calc(100%-3rem)]"> <!-- 3rem = h-12 header -->
          Content

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
            sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
            a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
            enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
            Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris
            ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
          </p>

          <p>
            Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla
            sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros
            vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam.
            Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus,
            convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum
            posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
          </p>

          <p>
            Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing
            nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu
            enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum
            augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum
            augue, et ultricies lacus lorem varius purus. Curabitur eu amet.
          </p>

          <p>
            Suspendisse potenti. Ut dapibus justo ut libero facilisis, nec luctus erat tristique. Integer convallis,
            augue at tempor volutpat, lorem elit suscipit velit, vel facilisis mauris justo sit amet sapien. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer in magna non urna
            fermentum tincidunt. Fusce ut sapien ut neque tincidunt venenatis. Aenean a tincidunt risus. Proin
            condimentum, eros vel egestas sagittis, erat urna tincidunt purus, nec sagittis nisl nulla non nunc. Vivamus
            rhoncus metus id nulla faucibus, at faucibus sem elementum.
          </p>

          <p>
            Aenean ut orci vitae eros tristique consequat. Sed dignissim, sapien nec bibendum porta, elit lorem pharetra
            enim, at fringilla ligula lacus vel odio. Quisque vel quam sed orci elementum facilisis. Sed feugiat ante a
            enim cursus, sed congue orci mattis. Nullam fringilla massa et elit lacinia, eget tempor neque congue.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed imperdiet,
            velit ut luctus malesuada, magna risus vehicula neque, ut bibendum sapien lorem in lacus. Integer suscipit
            eros in lorem commodo, sit amet venenatis libero bibendum. Proin sit amet lectus et lorem ultrices
            tincidunt. Suspendisse potenti.
          </p>

          <p>
            Sed ac odio ac enim lacinia porta. Donec gravida luctus magna, a blandit libero dignissim nec. Suspendisse
            nec nisl vel sapien sodales fermentum. Integer tincidunt, metus at tristique ullamcorper, mi nulla pharetra
            lectus, vitae condimentum leo eros id arcu. Fusce id feugiat ligula. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Donec non lectus vitae mi hendrerit congue. Duis
            vitae turpis id elit ullamcorper tincidunt sit amet eget erat. Nulla facilisi. Curabitur in aliquam risus,
            eget laoreet metus. Cras volutpat tortor sed nulla porttitor, at pharetra nulla viverra. Mauris vel nunc vel
            nulla euismod tincidunt.
          </p>

          <p>
            Vivamus imperdiet, erat in congue bibendum, risus justo faucibus nisi, vitae consectetur magna tortor in
            urna. Integer lacinia odio vel tellus commodo porta. Curabitur vitae semper odio. Nulla varius libero sed
            turpis tincidunt, vitae interdum massa mattis. In hac habitasse platea dictumst. Proin vitae sodales risus.
            Integer et sem ut velit faucibus commodo. Nulla facilisi. Vestibulum eu bibendum metus. Ut quis sapien sed
            nunc vestibulum aliquam.
          </p>

          <p>
            Donec sagittis urna vel lacus fermentum, ut faucibus turpis viverra. Sed vel erat ut justo elementum
            tristique. Vestibulum pulvinar congue odio, in ultricies erat varius eget. Suspendisse potenti. Etiam nec
            justo odio. Nam sit amet fermentum risus, ut egestas urna. Phasellus feugiat, sem nec elementum ullamcorper,
            neque felis faucibus sapien, ut sagittis justo ipsum id magna. Aenean tincidunt quam et mi porta porta.
          </p>

          <p>
            Praesent vehicula, turpis sed consequat blandit, velit risus egestas sem, vitae porta justo elit nec libero.
            Maecenas egestas tincidunt nulla vel congue. Fusce in nulla sit amet nulla porttitor gravida. Suspendisse
            nec orci risus. In vulputate tellus at mauris aliquet, nec pretium libero ullamcorper. Sed non felis vel
            eros egestas fringilla sit amet sit amet enim. Duis ac eros in nulla hendrerit tristique. Suspendisse vitae
            mi eros. Vivamus vel facilisis lacus. Sed dignissim justo non odio ultricies, sit amet ullamcorper elit
            fermentum. Aliquam varius eros eget libero pretium convallis. Donec accumsan augue vitae enim tincidunt,
            eget tempus purus feugiat.
          </p>

          <p>
            Mauris vulputate eros ut ipsum tempor, at sodales sapien hendrerit. Cras efficitur ex id ligula fringilla,
            et vehicula lectus commodo. Fusce imperdiet sem vitae lacinia gravida. Integer et vulputate erat, in blandit
            massa. Curabitur lacinia magna quis sagittis laoreet. Sed in risus et arcu mattis sodales. Proin fringilla
            justo sed sapien facilisis, id congue nulla aliquam. Donec blandit risus a nulla tincidunt, a pretium justo
            condimentum. Nullam tincidunt pretium neque, nec imperdiet magna fermentum ac. Curabitur finibus congue
            orci, vitae fermentum eros tristique in.
          </p>

          <p>
            Vivamus vulputate nunc quis urna ultrices, id tincidunt nulla blandit. Sed eget tellus id lacus dapibus
            dictum. Aliquam erat volutpat. Sed laoreet sem vitae nisi scelerisque convallis. Nullam commodo risus non
            eros sodales, vel commodo arcu pulvinar. Fusce vestibulum nisi nec ante pretium, sit amet hendrerit turpis
            ornare. Mauris ac pretium elit, et dictum urna. Integer condimentum dolor at metus ornare, sed dapibus
            libero posuere.
          </p>

          <p>
            Sed vitae tortor magna. Nulla facilisi. Pellentesque ut elit at ipsum laoreet feugiat nec sit amet libero.
            Integer tempor, nibh non feugiat dictum, lorem justo condimentum augue, in lacinia metus odio eget eros.
            Nulla ut odio in sem malesuada ultricies. Vestibulum tincidunt, nunc vel facilisis tempor, sem est dictum
            lacus, et sagittis lectus arcu nec lorem. Fusce imperdiet dui nec commodo vestibulum. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae; In congue, sem a dapibus varius, sem neque
            ultrices justo, id vehicula augue enim eget enim.
          </p>

          <p>
            Mauris efficitur, nunc sed interdum luctus, tortor ante sodales risus, vel egestas odio tortor in mi. Duis
            dictum lacinia odio, a porta ligula volutpat id. Nulla facilisi. Aenean at fermentum velit, vitae mattis ex.
            Integer tempor turpis non massa venenatis dictum. Curabitur ac turpis a metus iaculis gravida. Vestibulum
            porttitor felis non felis blandit, ut gravida mi bibendum. Integer ut dolor a ligula convallis sagittis.
          </p>

          <p>
            Sed pretium convallis sapien. Duis et quam a erat viverra facilisis. Nunc ut fermentum sapien, in blandit
            sem. Vestibulum eget lacinia lacus, a scelerisque ex. Vestibulum ac nulla non elit commodo sodales.
            Pellentesque eget leo eros. Proin vel sem nec arcu feugiat luctus sed a nunc. Donec sed nisl vitae justo
            feugiat consequat in quis nisi. Integer maximus urna a risus tincidunt accumsan. Nullam posuere metus sed
            quam feugiat



          </p>
          <router-view />
        </n-layout-content>
      </n-layout>

      <!-- Fixed footer -->
      <n-layout-footer class="fixed inset-x-0 bottom-0 backdrop-blur border-t">
        footer
      </n-layout-footer>
    </div>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutContent, NScrollbar, darkTheme, type GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  Scrollbar: {
    width: '10px',
    height: '10px',
    borderRadius: '8px',
    color: 'rgba(255,255,255,0.35)',       // thumb
    colorHover: 'rgba(255,255,255,0.55)',  // thumb on hover
    railColor: 'rgba(255,255,255,0.10)'    // track
  }
}
</script>

<style scoped>
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
