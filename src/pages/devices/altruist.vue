<template>

  <layout :backlink="{title: $t('All hardware'), link: '/devices/', label: 'Go to all hardware'}" :title="$t('Altruist outdoor sensor')">

    <MetaInfo
      pageTitle = "Smart devices from Robonomics"
      pageDescription = "Take full control over your smart devices using open-source firmwares, software and cloud-free hardware from Robonomics. Start with Universal IR Remote Control, Smart Energy Power Consumption Monitoring, 1,2 gang wi-fi Smart Switch, Air Quality Sensor, Tasmota firmware and Home Assistant smart home dashboard."
      :pageImage = "'/website_cover_devices.png'"
    />

    <div class="layout layout__content">
      <Altruist class="altruist-page"/>
      <p><b>{{ $t('A smart sensor that collects environmental data - noise, dust, and temperature, and stores them on a decentralized') }} <g-link aria-label="go to decentralized sensor map" to="https://sensors.social/">{{ $t('sensor map') }}</g-link></b>.</p>
      <p>{{$t('Become a provider of environmental data to your friends and neighbors in the area. Access truly decentralized measurements of air quality, noise, temperature, and other environmental conditions on the sensor map.')}}</p>
      <p class="align-center"><g-link to="/blog/robo-season-pass-2025-welcome-to-the-paper-st-club/" class="highlight">{{ $t('Available for members') }}</g-link></p>

      <h2 class="title-lined"><span>{{ $t('Usage') }}</span></h2>

      <section class="section">
        <h3 class="highlight-solid-green">{{ $t('Into the map') }}</h3>
        <p> {{ $t('Connect your device as simple as other smart devices and look at your environmental outdoor data on a decentralized fully distributed sensor map') }}, <g-link class="highlight" to="https://sensors.social/" aria-label="check the sensor map">{{ $t('this') }}</g-link> {{ $t('or any other independent fork') }}.</p>
        <g-link class="depin__github" aria-label="check our firmware" to="https://github.com/airalab/altruist-firmware">{{ $t('Open-source under the hood: check our firmware') }}</g-link>
      </section>

      <section class="section">
        <h3 class="highlight-solid-green">{{ $t('Join the Connectivity') }}</h3>
        <p> {{ $t("Data processing is always a sensitive issue. That's why we offer a fully open-source") }}
          <g-link class="highlight" to="https://github.com/airalab/sensors-connectivity" aria-label="check open source connectivity module">{{$t('connectivity module')}}</g-link>  
          {{ $t('giving you the freedom to choose which servers to use for processing. No closed clouds, no opaque code.') }}</p>
        <h5>{{ $t('Use Robonomics Connectivity') }}</h5>
        <p>{{$t('Robonomics established three Connectivity hubs to ensure a stable connection. This option switched on by default on the station.')}}</p>
        <h5>{{ $t('Create your own Connectivity') }}</h5>
        <p>{{ $t('You may launch your own hub for receiving data from Altruist Civil Station and further processing.') }}</p>
        <details>
          <summary>{{$t('Steps to set up your Connectivity')}}</summary>
          <ol>
            <li>
              <p><b>{{ $t('Deploy Connectivity') }}</b></p>
              <p>{{ $t('Technical requirements:') }}</p>
              <ul class="list-smallgap">
                <li>{{ $t('2 CPU cores;') }}</li>
                <li>{{ $t('4 GB RAM;') }}</li>
                <li>{{ $t('40 GB storage;') }}</li>
                <li>{{$t('Static IP')}}.</li>
              </ul>
              <p>{{ $t('Than set up') }} <g-link aria-label="see open source connectivity module" to="https://github.com/airalab/sensors-connectivity">{{$t('connectivity module')}}</g-link> {{ $t('and follow') }} <g-link aria-label="check the instruction for  connectivity" to="https://robonomics.academy/en/learn/sensors-connectivity-course/sensors-connectivity-module/">{{$t('the instructions')}}</g-link>.</p>
            </li>

            <li>
              <p><b>{{ $t('Connect a station to your connectivity') }}</b></p>
              <ol class="list-smallgap">
                  <li>{{ $t('Open your sensor settings by its IP.') }}</li>
                  <li>{{$t('Go to APIs settings')}}.</li>
                  <li>{{$t('Check the checkbox for sending data to custom API and fill corresponding fields (server IP, ports, etc.).')}}</li>
                </ol>
            </li>

            <li>
              <p><b>{{ $t('Join with your setup to global map (optional)') }}</b></p>
              <p>{{ $t('If you want to publish data to') }} <g-link aria-label="see the sensors map" to="https://sensors.social/">{{ $t('the global map') }}</g-link>, {{ $t('you need to make two pull requests:') }}</p>

              <ol class="list-smallgap">
                  <li>{{$t('Add IPFS ID of your Connectivity to agents list of sensor map:')}} <g-link aria-label="check agents.json file" to="https://github.com/airalab/sensors.social/blob/master/src/agents.json">https://github.com/airalab/sensors.social/blob/master/src/agents.json</g-link></li>
                  <li>{{ $t('Add parachain address of your Connectivity to template agents list of long-term storage server:') }} <g-link aria-label="check agents.template.json file" to="https://github.com/airalab/RoSeMAN/blob/master/config/agents.template.json">https://github.com/airalab/RoSeMAN/blob/master/config/agents.template.json</g-link></li>
              </ol>
            </li>
          </ol>
        </details>

        <g-link class="depin__github" aria-label="check our connectivity module" to="https://github.com/airalab/sensors-connectivity">{{$t('Open-source under the hood: check our connectivity module')}}</g-link>
      </section>

      <section class="section">
        <h3 class="highlight-solid-green">{{$t('Your own air quality map')}}</h3>
        <p>{{ $t('You have an opportunity to become the administrator of a sovereign sensor infrastructure, giving you full control over how data is collected, processed, and shared within your own independent network.') }}</p>
        <details>
          <summary>{{$t('Steps for launching your own map')}}</summary>
          <ol>
            <li>
              <p><b>{{$t('Deploy web interface')}}</b></p>

              <ol class="list-smallgap">
                  <li>{{$t('Fork the map repository:')}} <g-link to="https://github.com/airalab/sensors.social" aria-label="see the sensors map repository">https://github.com/airalab/sensors.social</g-link></li>
                  <li>{{ $t('Edit the settings to customize your map, including the domain, provider, starting viewpoint, and your connectivity IPFS ID for the list of agents.') }}</li>
                  <li>{{$t('Deploy your own version of the web interface and begin receiving real-time data from your sensor.')}}</li>
              </ol>

              <p>{{$t('Full guide here:')}} <g-link aria-label="see full guide" to="https://github.com/airalab/sensors.social?tab=readme-ov-file#setup-your-own-map"> https://github.com/airalab/sensors.social?tab=readme-ov-file#setup-your-own-map </g-link></p>

            </li>

            <li>
              <p><b>{{ $t('Launch long-term storage') }}</b></p>
              <p>{{$t('Simply collecting data from sensors is not enough; it needs to be processed. Tweak a server for collecting sensor’s data based on with open-source node.js software')}} <g-link aria-label="check node.js software for sensors" to="https://github.com/airalab/RoSeMAN">{{$t('Robonomics Sensors Measure Analytics and Archive Node (RoSeMAN)')}}</g-link> {{$t('and get your own working server for long-term map data storage.')}}</p>
              <p>{{$t('Technical requirements:')}}</p>
              <ul class="list-smallgap">
                <li>{{ $t('2 CPU cores;') }}</li>
                <li>{{$t('4 GB RAM;')}}</li>
                <li>{{$t('40 GB storage;')}}</li>
                <li>{{$t('Static IP.')}}</li>
              </ul>
              <p>{{$t('Steps for launching a storage:')}}</p>
              <ol class="list-smallgap">
                  <li>{{$t('Fork the RoSeMAN repository:')}} <g-link aria-label="check the roseman repository" to="https://github.com/airalab/RoSeMAN">https://github.com/airalab/RoSeMAN</g-link></li>
                  <li>{{ $t('Choose Docker or Node.js (required MongoDB database) version.') }}</li>
                  <li>{{$t('Add a parachain address of your Connectivity to agents list.')}}</li>
                  <li>{{ $t('Add RoSeMAN domain to remote provider of map.') }}</li>
                  <li>{{$t('Run the project.')}}</li>
                </ol>
            </li>
          </ol>
        </details>

        <g-link class="depin__github" aria-label="check our server-side software" to="https://github.com/airalab/RoSeMAN">{{ $t('Open-source under the hood: check our server-side software') }}</g-link>
      </section>

    </div>

  </layout>
  
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    Altruist: () => import("~/components/3dmodels/altruistSensor.vue"),
  }

}
</script>

<style scoped> 

  .depin__github {
    display: inline-block;
    height: 50px;
    padding-left: 60px;
    padding-top: 10px;
    font-variation-settings: var(--font-flex-bold);
    font-size: var(--base-font-size);
    font-size: 22px;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='49' viewBox='0 0 52 49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26.0002 0C11.7194 0 0 10.8598 0 24.0931C0 35.3856 8.55115 45.6436 19.9064 48.1861V40.2151C18.7813 40.4434 17.7458 40.4501 16.6004 40.1372C15.0639 39.717 13.8154 38.7685 12.8886 37.3223C12.2979 36.3988 11.2509 35.3973 10.1587 35.4709L9.89091 32.6585C12.2527 32.471 14.2958 33.9919 15.5086 35.88C16.0474 36.7197 16.6675 37.212 17.4633 37.4296C18.2326 37.6395 19.0586 37.5388 20.0211 37.2237C20.2627 35.4381 21.1454 34.7698 21.8123 33.8287V33.8272C15.0401 32.8912 12.3411 29.5619 11.27 26.9341C9.85045 23.4449 10.6122 19.0859 13.1223 16.3313C13.1711 16.2776 13.2592 16.1372 13.225 16.039C12.0741 12.8175 13.4766 10.1525 13.5281 9.86979C14.8564 10.2337 15.0722 9.50363 19.2978 11.8826L20.0282 12.2892C20.3337 12.4579 20.2377 12.3616 20.5432 12.3403C22.3074 11.8962 24.1673 11.651 25.9998 11.6289C27.8462 11.651 29.6942 11.8962 31.5314 12.3583L31.7679 12.3803C31.7473 12.3774 31.8322 12.3664 31.9746 12.2877C37.2531 9.32496 37.0635 10.2933 38.479 9.86685C38.5302 10.1499 39.914 12.8583 38.7754 16.039C38.6218 16.4772 43.3517 20.4906 40.73 26.933C39.6589 29.5619 36.9603 32.8912 30.1881 33.8272V33.8287C31.0561 35.0547 32.0992 35.7069 32.0936 38.2362V48.1861C43.4492 45.6436 52 35.3856 52 24.0931C52.0004 10.8598 40.2809 0 26.0002 0Z' fill='%232949D3'/%3E%3C/svg%3E%0A");
    background-position: left;
    background-size: 50px 50px;
    background-repeat: no-repeat;
    text-transform: uppercase
  }


  @media screen and (max-width: 520px) {

    .depin__github { 
      font-size: 16px;
    }
  }

</style>