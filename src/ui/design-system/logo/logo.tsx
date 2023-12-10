interface LogoProps {
  size?: "very-small" | "small" | "medium" | "large";
}

const Logo = ({ size = "medium" }: LogoProps) => {
  let sizeLogo: number;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium": // Default
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }

  return (
    <div>
      <svg
        width={sizeLogo}
        viewBox="0 0 88 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1117_5092)">
          <path
            d="M43.8011 87.1201C67.7173 87.1201 87.1051 67.8171 87.1051 44.0056C87.1051 20.1941 67.7173 0.891113 43.8011 0.891113C19.885 0.891113 0.497192 20.1941 0.497192 44.0056C0.497192 67.8171 19.885 87.1201 43.8011 87.1201Z"
            fill="#5F62E2"
          />
          <path
            d="M61.6995 78.0615L64.3345 73.458L65.3288 78.2595C69.5051 73.953 71.5435 71.676 73.3831 66.8745L79.7966 70.29L78.852 61.4295L77.3108 57.5685L81.7853 58.014C80.4927 55.0935 79.1503 52.371 77.4599 49.896C79.1503 47.8665 80.2938 46.332 80.1447 43.0155C80.0452 41.085 79.3989 39.105 78.2057 37.9665C76.7639 36.63 74.2283 34.353 72.1899 34.8975C71.643 35.046 71.0961 35.2935 70.5492 35.5905L70.7481 26.433L70.5989 25.74C67.1684 17.1765 61.0531 11.484 54.0927 8.71201C47.4803 6.08851 40.1718 6.08851 33.5594 8.71201C26.5989 11.484 20.5334 17.127 17.0531 25.74L16.904 26.4825L17.1029 35.64C16.556 35.343 15.9594 35.0955 15.4622 34.947C13.4238 34.4025 10.8882 36.6795 9.44636 38.016C8.25314 39.1545 7.60681 41.085 7.50738 43.065C7.35822 46.431 8.50173 47.916 10.1921 49.9455C8.50173 52.4205 7.15935 55.143 5.8667 58.0635L10.3413 57.618L8.80003 61.479L7.8554 70.3395L14.269 66.924C16.0588 71.7255 18.1469 74.0025 22.3232 78.309L23.3175 73.5075L25.9526 78.111C25.9526 78.111 26.0023 89.298 35.2498 95.2875L34.8023 92.862C34.8023 92.862 39.1277 99.891 52.7503 97.5645L50.9108 95.436C50.9108 95.436 54.739 94.743 58.0701 92.169L55.2859 92.07C59.2633 88.407 61.2023 83.061 61.6995 78.0615Z"
            fill="#081630"
          />
          <path
            d="M66.9695 38.4121C55.8328 27.5221 31.8192 27.5221 20.6328 38.4121L20.0859 47.7676C25.7537 43.4116 35.4486 39.5011 43.9006 39.2536C52.3525 39.4516 61.8486 43.4116 67.5164 47.7676L66.9695 38.4121Z"
            fill="#6E75E5"
          />
          <path
            d="M66.9695 38.4121C64.0362 35.5411 60.1582 33.4126 55.8825 32.0266C51.8554 35.8381 42.4588 40.7386 20.4339 41.9761L20.0859 47.7181C25.7537 43.3621 35.4486 39.4516 43.9006 39.2041C52.3525 39.4021 61.8486 43.3621 67.5164 47.7181L66.9695 38.4121Z"
            fill="#5658CB"
          />
          <path
            d="M65.7266 36.1847C65.1299 35.5907 64.4836 34.9967 63.8373 34.4522L63.9367 41.3327C58.1198 37.7192 50.2644 34.9967 43.9006 34.9472C37.7356 34.8482 29.383 37.8182 23.6655 41.3327L23.765 34.3037C23.1186 34.8482 22.4723 35.3927 21.8757 36.0362L21.478 45.5402C26.8475 41.1842 35.9458 37.3232 43.9006 37.0757C51.8554 37.2737 60.7548 41.1842 66.1243 45.4412L65.7266 36.1847Z"
            fill="#081630"
          />
          <path
            d="M20.6328 33.7591C33.0125 24.3541 54.6396 24.3541 67.0192 33.7591L67.1684 26.7796C64.0859 19.3546 58.8158 14.4541 52.8 12.0781C47.0825 9.80111 40.6192 9.80111 34.9017 12.0781C28.8362 14.4541 23.5661 19.3546 20.4836 26.7796L20.6328 33.7591Z"
            fill="#6E75E5"
          />
          <path
            d="M20.6328 33.7592C33.0124 24.3542 54.6396 24.3542 67.0192 33.7592L67.1684 26.7797C64.7322 20.9387 60.9537 16.6322 56.4791 13.9097C52.104 19.1072 42.3593 25.3442 20.5831 28.6112L20.6328 33.7592Z"
            fill="#5658CB"
          />
          <path
            d="M54.391 63.1622C53.5955 64.5482 52.452 65.2412 50.6124 66.0332C53.0983 63.3602 52.0543 59.4992 51.8554 58.9052C50.861 57.8657 48.9718 57.0242 48.0769 56.6282C46.0882 57.2222 45.0938 58.3607 45.0938 58.3607L43.7514 59.8457L42.4091 58.3607C42.4091 58.3607 41.4147 57.2222 39.426 56.6282C38.5311 56.9747 36.6418 57.8657 35.6475 58.9052C35.4486 59.4992 34.6034 63.3602 37.0893 66.0332C35.2497 65.2412 33.9074 64.5482 33.1119 63.1622L29.4328 66.8252C27.7424 77.8142 30.0791 91.6742 44.2486 91.2782C46.3367 90.3872 48.574 88.9517 49.9661 86.6252C49.9661 86.6252 51.1593 87.3677 51.8057 89.1002C58.4678 84.6947 59.0147 74.0027 57.9209 66.7757L54.391 63.1622Z"
            fill="#FEDBB8"
          />
          <path
            d="M51.1096 65.4887C52.9989 62.8652 52.104 59.4497 51.9051 58.9052C50.9108 57.8657 49.0215 57.0242 48.1266 56.6282C46.1379 57.2222 45.1435 58.3607 45.1435 58.3607L44.5469 59.0042C49.2701 59.7962 52.4023 62.4197 51.1096 65.4887ZM42.9063 58.8062L42.5085 58.3607C42.5085 58.3607 41.5142 57.2222 39.5255 56.6282C38.6305 56.9747 36.7413 57.8657 35.7469 58.9052C35.6972 59.0042 35.6475 59.2517 35.5978 59.5982C38.0837 58.8557 40.6192 58.6082 42.9063 58.8062Z"
            fill="#E0B497"
          />
          <path
            d="M32.0181 64.3501L29.582 66.8251C27.8916 77.8141 30.2283 91.6741 44.3978 91.2781C46.4859 90.3871 48.7232 88.9516 50.1153 86.6251C50.1153 86.6251 51.3085 87.3676 51.9548 89.1001C53.3469 88.1596 54.4904 86.9716 55.3853 85.5856C30.7752 87.4171 31.3718 69.4486 32.0181 64.3501Z"
            fill="#E0B497"
          />
          <path
            d="M32.1175 58.9545C32.1175 58.7565 32.1175 58.509 32.1175 58.311C33.5593 55.935 36.1944 54.0045 38.7797 53.064C39.078 53.0145 39.426 53.0145 39.774 53.0145C40.122 50.193 39.5254 46.4805 39.1774 46.332C38.1831 45.837 33.7085 45.342 32.3164 45.144C28.339 46.5795 24.7096 48.5595 21.8757 50.8365C21.4283 51.183 20.9311 51.4305 20.4339 51.5295C20.5831 53.955 21.0802 57.519 23.1186 58.4595C25.9028 59.796 30.3774 59.2515 32.1175 58.9545Z"
            fill="#3A4559"
          />
          <path
            d="M32.7142 45.2431L32.2667 45.1936C31.1232 45.5896 30.0294 46.0351 28.9854 46.5301L22.3729 58.0141C22.5718 58.2121 22.8204 58.3606 23.069 58.4596C23.5661 58.7071 24.1628 58.8556 24.7594 59.0041L32.7142 45.2431Z"
            fill="#6A7486"
          />
          <path
            d="M35.4486 45.5896C35.0012 45.5401 34.504 45.4411 34.0565 45.3916L26.052 59.2021C26.5492 59.2516 26.9966 59.3011 27.4938 59.3011L35.4486 45.5896Z"
            fill="#6A7486"
          />
          <path
            d="M38.1334 46.0351C37.7356 45.9361 37.2882 45.8866 36.791 45.7876L28.9854 59.3011C29.5322 59.2516 30.0791 59.2516 30.5266 59.2021L38.1334 46.0351Z"
            fill="#6A7486"
          />
          <path
            d="M13.6723 45.6392C13.4237 44.7977 13.4237 44.5997 13.4237 43.7582C12.8768 44.3027 12.3797 44.9957 11.9819 45.7877C11.9322 44.3027 12.2305 42.5207 13.3243 41.3822L16.1582 39.2042C15.3627 38.7587 14.5175 38.4617 14.2192 38.6102C13.4237 39.1052 12.5288 39.8477 11.8328 40.4912C10.7887 41.4812 10.739 44.8967 11.6339 45.9857L12.4294 47.0252C12.8271 46.5302 13.2746 46.0847 13.6723 45.6392Z"
            fill="#FEDBB8"
          />
          <path
            d="M13.6723 45.6391C13.4237 44.7976 13.4237 44.5996 13.4237 43.7581C12.8768 44.3026 12.3797 44.9956 11.9819 45.7876C11.9322 45.0946 12.0316 44.3026 12.1808 43.5601C11.8328 43.7086 11.435 43.8076 11.0373 43.9066C11.087 44.7976 11.2859 45.6391 11.6836 46.0846L12.4294 47.0251C12.8271 46.5301 13.2746 46.0846 13.6723 45.6391ZM15.3627 39.8971L16.2079 39.2536C15.9096 39.1051 15.6113 38.9566 15.313 38.8081C15.3627 39.1546 15.3627 39.5011 15.3627 39.8971Z"
            fill="#E0B497"
          />
          <path
            d="M16.8045 42.9166L16.8542 41.9761L15.2633 42.5701C15.2136 43.5601 15.1638 43.6591 15.313 44.1046C15.8102 43.7086 16.3073 43.3126 16.8045 42.9166Z"
            fill="#E0B497"
          />
          <path
            d="M44.1989 52.1235H43.4532C43.4532 52.965 43.3537 53.757 43.1548 54.45C43.4034 54.5985 43.652 54.6975 43.8012 54.7965C43.9503 54.6975 44.1989 54.549 44.4475 54.45C44.2983 53.757 44.1989 52.965 44.1989 52.1235Z"
            fill="#E0B497"
          />
          <path
            d="M55.4847 58.9545C57.2746 59.2515 61.6994 59.7465 64.583 58.4595C66.5717 57.519 67.1186 53.955 67.2678 51.5295C66.7706 51.4305 66.2734 51.2325 65.826 50.8365C62.9921 48.5595 59.3627 46.5795 55.3853 45.144C53.9932 45.2925 49.5186 45.837 48.5243 46.332C48.1763 46.53 47.5797 50.193 47.9277 53.0145C48.2757 52.965 48.574 52.965 48.922 53.064C51.5073 54.0045 54.1424 55.935 55.5842 58.311C55.4847 58.509 55.4847 58.7565 55.4847 58.9545Z"
            fill="#3A4559"
          />
          <path
            d="M59.1639 46.7775C58.4181 46.431 57.6226 46.0845 56.8271 45.738L51.7062 54.549C52.452 55.044 53.0983 55.5885 53.7447 56.1825L59.1639 46.7775Z"
            fill="#6A7486"
          />
          <path
            d="M61.4509 47.9656C61.1029 47.7676 60.7051 47.5696 60.3074 47.3716L54.6396 57.1726C54.9379 57.5191 55.2362 57.9151 55.4351 58.3111L61.4509 47.9656Z"
            fill="#6A7486"
          />
          <path
            d="M56.4791 59.1031C56.8769 59.1526 57.374 59.2021 57.8712 59.2516L63.6384 49.3021C63.2904 49.0546 62.9424 48.8566 62.5447 48.6091L56.4791 59.1031Z"
            fill="#6A7486"
          />
          <path
            d="M72.2893 44.1045C71.7921 43.7085 71.2949 43.263 70.7978 42.867L70.748 41.9265L72.339 42.57C72.3887 43.56 72.4384 43.659 72.2893 44.1045Z"
            fill="#E0B497"
          />
          <path
            d="M75.1729 47.0252C74.7752 46.5302 74.3277 46.0847 73.8803 45.6392C74.1289 44.7977 74.1786 44.5997 74.1289 43.7582C74.6758 44.3027 75.1729 44.9957 75.5707 45.7877C75.6204 44.3027 75.3221 42.5207 74.2283 41.3822L71.3944 39.2042C72.1899 38.7587 73.0351 38.4617 73.3334 38.6102C74.1289 39.1052 75.0238 39.8477 75.7198 40.4912C76.7639 41.4812 76.8136 44.8967 75.9187 45.9857L75.1729 47.0252Z"
            fill="#FEDBB8"
          />
          <path
            d="M75.1729 47.025C74.7752 46.53 74.3277 46.0845 73.8803 45.639C74.1288 44.7975 74.1786 44.5995 74.1288 43.758C74.6757 44.3025 75.1729 44.9955 75.5706 45.7875C75.5706 45.243 75.5706 44.649 75.4712 44.055C75.7695 44.253 76.0678 44.4015 76.4158 44.55C76.3164 45.1935 76.1175 45.738 75.869 46.035L75.1729 47.025ZM72.7368 40.2435L71.4441 39.2535C71.8418 39.0555 72.1899 38.8575 72.5379 38.7585C72.5379 39.204 72.5876 39.699 72.7368 40.2435Z"
            fill="#E0B497"
          />
          <path
            d="M43.8012 42.7681C42.7074 42.8176 41.6633 42.9166 40.5695 43.0651C41.9616 43.6591 42.8068 45.6886 43.1548 48.0151H44.348C44.7458 45.6391 45.5413 43.6591 46.9334 43.0651C45.939 42.9661 44.8949 42.8671 43.8012 42.7681Z"
            fill="#E0B497"
          />
          <path
            d="M43.2045 63.6077L42.5085 60.4892C42.409 59.9942 42.1107 59.5982 41.6633 59.3507L40.5695 58.7567C40.0723 58.5092 39.5254 58.4597 39.0282 58.7072L38.8294 58.8062C38.0836 59.1527 37.7356 59.9447 37.8847 60.7367L38.0836 61.7267L38.2825 61.5287C38.6802 61.0832 39.2271 60.9347 39.8237 61.0337L40.5695 61.1822C40.9672 61.2317 41.3152 61.4297 41.5638 61.7267L43.2045 63.6077ZM44.3977 63.6077L45.0938 60.4892C45.1932 59.9942 45.4915 59.5982 45.939 59.3507L47.0328 58.7567C47.5299 58.5092 48.0768 58.4597 48.574 58.7072L48.7729 58.8062C49.5186 59.1527 49.8667 59.9447 49.7175 60.7367L49.5186 61.7267L49.3198 61.5287C48.922 61.0832 48.3751 60.9347 47.7785 61.0337L47.0328 61.1822C46.635 61.2317 46.287 61.4297 46.0384 61.7267L44.3977 63.6077Z"
            fill="#081630"
          />
          <path
            d="M28.2893 80.1901C28.339 80.1901 37.6362 73.7551 50.3639 72.7156C54.8385 74.2996 58.0204 77.8141 59.9594 81.1801L56.8769 82.9621C55.2362 80.1901 53.2475 77.6161 50.2147 76.3291C38.6305 77.3686 29.93 84.0016 29.93 84.0511L28.2893 80.1901Z"
            fill="#081630"
          />
          <path
            d="M43.8011 12.771C45.1435 12.771 46.4362 13.1175 47.53 13.662C48.6735 14.2065 49.6181 14.949 50.3141 15.7905C48.1266 15.4935 45.9887 15.246 43.8011 15.246C41.6136 15.246 39.4757 15.4935 37.2881 15.7905C38.0339 14.949 38.9785 14.2065 40.0723 13.662C41.2158 13.1175 42.4588 12.8205 43.8011 12.771ZM50.3141 22.473C49.5684 23.166 48.6237 23.7105 47.53 24.156C46.4362 24.552 45.1435 24.7995 43.8011 24.7995C42.4588 24.7995 41.2158 24.552 40.0723 24.156C38.9785 23.76 37.9842 23.166 37.2881 22.473C39.4757 22.374 41.6136 22.3245 43.8011 22.3245C45.9887 22.3245 48.1266 22.374 50.3141 22.473Z"
            fill="#081630"
          />
          <path
            d="M37.7356 18.3645C37.5864 17.8695 37.2384 17.6715 36.791 17.721C36.0949 17.7705 35.7469 18.3645 35.896 19.206C35.9955 20.0475 36.4927 20.5425 37.139 20.4435C37.4373 20.394 37.6859 20.2455 37.835 20.0475C37.9345 19.899 37.9345 19.8 37.9345 19.602C38.3322 19.602 38.6802 19.6515 39.078 19.6515C39.0283 20.097 38.9288 20.394 38.6802 20.6415C38.3819 21.0375 37.8848 21.285 37.2384 21.3345C36.5921 21.384 35.9955 21.285 35.5977 20.9385C35.1503 20.592 34.852 19.998 34.7525 19.305C34.6531 18.612 34.8023 17.9685 35.2 17.4735C35.548 17.0775 36.0949 16.7805 36.791 16.731C37.5367 16.632 38.1333 16.83 38.5311 17.2755C38.7299 17.4735 38.8294 17.6715 38.9288 17.9685C38.4814 18.1665 38.0836 18.2655 37.7356 18.3645Z"
            fill="#081630"
          />
          <path
            d="M43.8508 18.7606C43.8508 20.1466 42.9559 21.0871 41.6633 21.1366C40.3706 21.1861 39.4757 20.3446 39.3762 18.9091C39.2768 17.5231 40.122 16.5331 41.5638 16.4836C42.9559 16.4341 43.8508 17.3746 43.8508 18.7606ZM42.7073 18.7606C42.7073 17.9191 42.2599 17.3746 41.5638 17.4241C40.8678 17.4241 40.47 18.0181 40.5198 18.8596C40.5695 19.7011 41.0169 20.2456 41.6633 20.1961C42.3096 20.1466 42.7073 19.6516 42.7073 18.7606Z"
            fill="#081630"
          />
          <path
            d="M44.4475 17.325C44.4475 16.9785 44.4475 16.7805 44.3977 16.533C44.6463 16.533 44.7955 16.533 45.2429 16.5825C45.6407 16.5825 46.0384 16.5825 46.4362 16.632C47.1322 16.6815 47.6791 16.8795 48.0768 17.226C48.4746 17.622 48.6237 18.216 48.574 18.909C48.5243 19.6515 48.2757 20.196 47.8282 20.592C47.4305 20.9385 46.9333 21.087 46.287 21.0375C45.8893 21.0375 45.5412 20.988 45.1435 20.988C44.7458 20.988 44.5966 20.988 44.348 20.988C44.3977 20.7405 44.3977 20.592 44.3977 20.196C44.4475 19.2555 44.4475 18.315 44.4475 17.325ZM46.2373 20.097C46.5853 20.097 46.8339 20.0475 47.0328 19.8495C47.2814 19.6515 47.4305 19.305 47.4305 18.8595C47.4802 18.414 47.3808 18.0675 47.1819 17.8695C46.9831 17.6715 46.7345 17.5725 46.3367 17.5725C46.0881 17.5725 45.8395 17.5725 45.591 17.523C45.5412 18.3645 45.5412 19.206 45.4915 20.097C45.7401 20.097 45.9887 20.097 46.2373 20.097Z"
            fill="#081630"
          />
          <path
            d="M52.3028 21.6315C52.0543 21.582 51.9051 21.5325 51.4079 21.483C50.861 21.4335 50.2644 21.3345 49.7175 21.285C49.3198 21.2355 49.1706 21.2355 48.9221 21.2355C48.9718 21.0375 49.0215 20.8395 49.0215 20.4435C49.1209 19.503 49.1706 18.513 49.2701 17.5725C49.3198 17.226 49.3198 17.0775 49.2701 16.7805C49.5187 16.83 49.6678 16.83 50.1153 16.8795C50.7119 16.929 51.3085 17.028 51.9548 17.0775C52.3526 17.127 52.5514 17.127 52.8 17.1765C52.7503 17.523 52.7006 17.82 52.6509 18.1665C52.4023 18.117 52.2034 18.0675 51.8057 18.018C51.3085 17.9685 50.8113 17.919 50.3639 17.8695C50.3141 18.117 50.3141 18.3645 50.2644 18.6615C50.6622 18.711 51.0599 18.7605 51.4577 18.81C51.8057 18.8595 51.9548 18.8595 52.3028 18.8595C52.2531 19.206 52.2034 19.503 52.1537 19.8495C51.9051 19.8 51.7062 19.7505 51.3582 19.701C50.9605 19.6515 50.5627 19.602 50.165 19.5525C50.1153 19.8495 50.1153 20.1465 50.0656 20.4435C50.513 20.493 51.0102 20.5425 51.4577 20.592C51.8554 20.6415 52.104 20.691 52.3526 20.691C52.3526 20.988 52.3526 21.285 52.3028 21.6315Z"
            fill="#081630"
          />
        </g>
        <defs>
          <clipPath id="clip0_1117_5092">
            <rect width="88" height="99" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;