<template>
  <layout :title="$t('Community & Contacts')">

    <MetaInfo
      pageTitle = "Contacts"
      pageImage = "/website_cover_contacts.png"
    />

    <section class="layout align-center">
      <!-- needs recoding -->
      <div class="share">
        <share :assets="contacts" :allTelegrams="allTelegrams"/>
      </div>
    </section>

  </layout>
</template>


<script>

  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      share: () => import('~/components/contacts/Share.vue'),
    },

    data() {
      return {
        data_email: '',
        data_comment: '',
        result: this.$response,
        location: '',
        interval: null,
        gscript: process.env.GRIDSOME_CONTACTS_FORM_SCRIPT,
        siteKey: process.env.GRIDSOME_RECAPTCHA,
        contacts: [
          {
            id: 0,
            title: this.$t('Twitter'),
            description: this.$t('The latest Robonomics news here.'),
            img: 'contacts-twitter-square.svg',
            rawSvg: `
            <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.178787" width="90.1154" height="90.1154" fill="#0AC4FF"/>
              <g clip-path="url(#clip0_23_4026)">
              <path d="M76.2518 25.963C73.9064 26.982 71.4242 27.6635 68.8833 27.9751C71.561 26.3914 73.5611 23.8859 74.5123 20.9327C72.004 22.4126 69.2612 23.4576 66.4011 24.0223C61.5735 18.8881 53.4819 18.622 48.322 23.4316C45.742 25.8397 44.2762 29.2083 44.2762 32.7328C44.2631 33.7064 44.3674 34.68 44.5759 35.6341C34.2822 35.1344 24.6986 30.2858 18.2097 22.3087C14.7893 28.1309 16.5158 35.5952 22.1382 39.3403C20.112 39.2884 18.1315 38.7497 16.3594 37.7696V37.9124C16.3594 43.9747 20.6463 49.2062 26.6075 50.433C25.513 50.7186 24.3859 50.8614 23.2523 50.8549C22.4379 50.8679 21.63 50.7965 20.8287 50.6407C22.5226 55.8203 27.3111 59.3772 32.7837 59.52C28.2558 63.0444 22.6724 64.9592 16.9262 64.9527C15.9034 64.9592 14.8805 64.9008 13.8642 64.7775C19.7146 68.5291 26.5293 70.5153 33.4873 70.4958C57.0195 70.4958 69.8931 51.0691 69.8931 34.2321C69.8931 33.6675 69.8736 33.1222 69.8475 32.5835C72.3688 30.7856 74.5448 28.5398 76.2583 25.9695L76.2518 25.963Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_23_4026">
              <rect width="62.3876" height="50.5043" fill="white" transform="translate(13.8642 19.9844)"/>
              </clipPath>
              </defs>
            </svg>
            `,
            buttonicon: '↗',
            options: [
              {
                link: 'https://twitter.com/AIRA_Robonomics',
                text: this.$t('Follow us')
              }
            ]
          },
          {
            id: 1,
            title: this.$t('Youtube'),
            description: this.$t('Video tutorials, screencasts, interviews, events.'),
            img: 'contacts-youtube-square.svg',
            rawSvg: `
            <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.298279" width="90.1154" height="90.1154" fill="#DA2142"/>
              <g clip-path="url(#clip0_23_3967)">
              <path d="M16.5065 59.7785C17.2118 62.338 19.2043 64.3435 21.7631 65.0821C27.967 66.7644 62.7501 66.7695 69.0467 65.0821C71.6003 64.3383 73.5876 62.3328 74.3033 59.7785C75.9456 51.0744 76.0537 39.7236 74.226 29.8449L74.3033 30.3373C73.5979 27.7779 71.6055 25.7724 69.0467 25.0338C62.92 23.3771 28.0494 23.3156 21.7579 25.0338C19.2043 25.7775 17.217 27.783 16.5065 30.3373C14.6994 40.0673 14.6994 50.0486 16.5065 59.7785ZM39.3606 54.2083V35.9332L55.12 45.0836L39.3606 54.2083Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_23_3967">
              <rect width="60.4071" height="42.582" fill="white" transform="translate(15.1526 23.7668)"/>
              </clipPath>
              </defs>
            </svg>
            `,
            buttonicon: '↗',
            options: [
              {
                link: 'https://www.youtube.com/c/Airalab',
                text: this.$t('Watch videos')
              }
            ]
          },
          {
            id: 2,
            title: this.$t('Discord'),
            description: this.$t('Chat with us and our community. Feel free to ask any questions and discuss your suggestions.'),
            img: 'contacts-discord-square.svg',
            rawSvg: `
            <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.388489" y="0.178818" width="90.1154" height="90.1154" fill="#634ACB"/>
              <g clip-path="url(#clip0_23_3963)">
              <path d="M65.0422 26.605C61.3901 24.8997 57.4826 23.6574 53.3971 22.9553C52.8942 23.8581 52.3061 25.0772 51.9037 26.0417C47.5629 25.3936 43.2608 25.3936 38.9974 26.0417C38.595 25.0772 37.9915 23.8581 37.4886 22.9553C33.4031 23.6574 29.4879 24.9074 25.8357 26.6127C18.4618 37.716 16.4654 48.5493 17.4636 59.2282C22.3538 62.8702 27.0892 65.077 31.7472 66.5276C32.9002 64.9458 33.9215 63.2714 34.8036 61.5045C33.1245 60.864 31.5074 60.077 29.9831 59.1665C30.3854 58.8656 30.78 58.557 31.1669 58.2329C40.4521 62.5616 50.5497 62.5616 59.7265 58.2329C60.1134 58.557 60.508 58.8656 60.9103 59.1665C59.386 60.0847 57.7689 60.8718 56.0821 61.5122C56.9641 63.2792 57.9855 64.9612 59.1384 66.5353C63.7965 65.0847 68.5396 62.8779 73.4298 59.236C74.5982 46.8595 71.4258 36.1265 65.0422 26.6127V26.605ZM36.0726 52.6619C33.287 52.6619 30.9967 50.0693 30.9967 46.9058C30.9967 43.7422 33.2329 41.1419 36.0726 41.1419C38.9123 41.1419 41.1949 43.7345 41.1485 46.9058C41.1485 50.0693 38.9123 52.6619 36.0726 52.6619ZM54.8286 52.6619C52.043 52.6619 49.7527 50.0693 49.7527 46.9058C49.7527 43.7422 51.9889 41.1419 54.8286 41.1419C57.6683 41.1419 59.9509 43.7345 59.9044 46.9058C59.9044 50.0693 57.6683 52.6619 54.8286 52.6619Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_23_3963">
              <rect width="56.4459" height="43.5723" fill="white" transform="translate(17.2236 22.9553)"/>
              </clipPath>
              </defs>
            </svg>
            `,
            buttonicon: '↗',
            options: [
              {
                link: 'https://discord.gg/J57BHwpteR',
                text: this.$t('Join chat')
              }
            ]
          },
          {
            id: 3,
            title: this.$t('Medium Blog'),
            description: this.$t('Our vision of the past, nowdays and future about Robonomics, Ethereum, Polkadot networks, green markets, robotics, and everything, that connected with Robonomics.'),
            img: 'medium.png',
            buttonicon: '↗',
            options: [
              {
                link: 'https://blog.aira.life',
                text: this.$t('Read')
              }
            ]
          },
          {
            id: 4,
            title: this.$t('Telegram chat'),
            defaultTitle: 'Telegram chat',
            description: this.$t('Local communities & news. You are welcome!'),
            img: 'tg-logo.svg',
            rawSvg: `
            <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4847 22.6954L16.6422 36.9232C16.6422 36.9232 17.2869 38.2523 17.9758 38.2523C18.6646 38.2523 28.9353 27.6044 28.9353 27.6044L40.3554 5.61835L11.6689 19.0237L11.4847 22.6954Z" fill="#C8DAEA"/>
              <path d="M18.3256 26.345L17.3346 36.8314C17.3346 36.8314 16.922 40.0441 20.1417 36.8314C23.3615 33.6186 26.4486 31.1403 26.4486 31.1403" fill="#A9C6D8"/>
              <path d="M11.5806 23.2021L0.970954 19.7581C0.970954 19.7581 -0.296305 19.2441 0.112607 18.0838C0.197336 17.8451 0.366796 17.6395 0.871489 17.287C3.22181 15.6531 44.3819 0.911314 44.3819 0.911314C44.3819 0.911314 45.5461 0.522115 46.2313 0.779133C46.5444 0.896627 46.747 1.03248 46.9128 1.52081C46.9754 1.69706 47.0086 2.07891 47.0049 2.45342C47.0049 2.72513 46.968 2.9748 46.9422 3.37135C46.6917 7.40286 39.1913 37.4887 39.1913 37.4887C39.1913 37.4887 38.7419 39.2474 37.1357 39.3098C36.55 39.3319 35.839 39.2144 34.988 38.4837C31.8309 35.7777 20.9266 28.471 18.5173 26.8665C18.381 26.7747 18.3442 26.6572 18.3184 26.5434C18.2852 26.3745 18.4694 26.1652 18.4694 26.1652C18.4694 26.1652 37.4599 9.34151 37.9646 7.57543C38.0051 7.43958 37.8578 7.36981 37.6588 7.42856C36.3989 7.89119 14.5314 21.6527 12.1184 23.1728C11.9784 23.2609 11.5806 23.2058 11.5806 23.2058V23.2021Z" fill="white"/>
            </svg>
            `,
            buttonicon: '+',
            options: [
              {
                id: 5,
                link: 'https://t.me/robonomics',
                text: 'EN'
              },
              {
                id: 6,
                link: 'https://t.me/robonomicsru',
                text: 'RU'
              },
              {
                id: 7,
                link: 'https://t.me/robonomicsESP',
                text: 'ES'
              },
              {
                id: 8,
                link: 'https://t.me/Robonomics_ITA',
                text: 'IT'
              },
              {
                id: 9,
                link: 'https://t.me/robonomicsfr',
                text: 'FR'
              }
            ]
          }
        ],
      }
    },

    computed: {

      allTelegrams() {
        return this.contacts.filter(asset => asset.defaultTitle === 'Telegram chat')
      }
    },

    // mounted() {
    //   this.location = 'https://robonomics.network' + this.$route.path;
    // }
  }
</script>

<style scoped>
.share {
  display: inline-block;
}
</style>