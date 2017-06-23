import html from 'choo/html';
import styles from './style.css';

export const modalSettings = {
  title: 'In welke taal moet het boek zijn?',
  children(id, value, emit) {
    return html`
      <form id=${id} onsubmit=${preventSubmit} onchange=${saveValues}>
        <select class=${styles.select} name="location">
          <option>Kies een taal...</option>
          <option ${value === 'eng' ? 'selected' : null} value="eng">Engels</option>
          <option ${value === 'dut' ? 'selected' : null} value="dut">Nederlands</option>
        </select>
      </form>
    `;

    function saveValues(e) {
      const value = e.target.parentNode.querySelector('select').value;
      emit('updateValue', {
        id,
        value: value,
      });
    }

    function preventSubmit(e) {
      e.preventDefault();
      return false;
    }

  },
  color: '#e42C9e',
};

export default (state, emit, id) => {
  const {animating} = state.machineparts[id] || false;
  return html`
    <svg data-animating="${animating}" class=${styles.svg}  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 225">
  <defs>
    <rect id="language-machine-a" width="62" height="55" rx="4"/>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <g transform="matrix(-1 0 0 1 183 149)">
      <g transform="translate(80)">
        <rect width="24" height="43.373" x="11" y="1.557" fill="#9B9B9B"/>
        <rect width="11.795" height="45.443" x="10.795" y="1.557" fill="#4A4A4A"/>
        <rect width="44.821" height="9" fill="#4A4A4A"/>
      </g>
      <path fill="#9B9B9B" d="M53,-11 L69.0029381,-11 C72.3150239,-11 75,-8.31231905 75,-5.00693516 L75,89 L57.9921405,89 C55.2350574,89 53,86.7711504 53,84.0067709 L53,-11 Z" transform="rotate(-90 64 39)"/>
      <g transform="matrix(1 0 0 -1 0 76)">
        <path fill="#9B9B9B" d="M12,2.08695652 L35,2.08695652 L35,46.9565217 L17.997932,46.9565217 C14.6853656,46.9565217 12,44.2674596 12,40.9517707 L12,2.08695652 Z"/>
        <path fill="#4A4A4A" d="M11.7948718,0.196796339 L23.5897436,0.196796339 L23.5897436,48 L16.7969593,48 C14.0343827,48 11.7948718,45.7584691 11.7948718,42.9970558 L11.7948718,0.196796339 Z"/>
        <rect width="44.821" height="9.391" fill="#4A4A4A"/>
      </g>
      <path fill="#4A4A4A" d="M58.5512821,-6.55128205 L68.5512821,-6.55128205 L68.5512821,96.5512821 L63.5512821,96.5512821 C60.7898583,96.5512821 58.5512821,94.3140456 58.5512821,91.5435879 L58.5512821,-6.55128205 Z" transform="rotate(-90 63.551 45)"/>
    </g>
    <g transform="translate(148 149)">
      <g transform="translate(68)">
        <rect width="24" height="43.373" x="11" y="1.557" fill="#9B9B9B"/>
        <rect width="11.795" height="45.443" x="10.795" y="1.557" fill="#4A4A4A"/>
        <rect width="44.821" height="9" fill="#4A4A4A"/>
      </g>
      <path fill="#9B9B9B" d="M41,-11 L57.0029381,-11 C60.3150239,-11 63,-8.31231905 63,-5.00693516 L63,89 L45.9921405,89 C43.2350574,89 41,86.7711504 41,84.0067709 L41,-11 Z" transform="rotate(-90 52 39)"/>
      <path fill="#4A4A4A" d="M46.5512821,-6.55128205 L56.5512821,-6.55128205 L56.5512821,96.5512821 L51.5512821,96.5512821 C48.7898583,96.5512821 46.5512821,94.3140456 46.5512821,91.5435879 L46.5512821,-6.55128205 Z" transform="rotate(-90 51.551 45)"/>
    </g>
    <rect width="265" height="45" x="28" y="105" fill="#9B9B9B" rx="6"/>
    <path stroke="#979797" stroke-linejoin="round" stroke-width="4" d="M67.2139603,45.8173763 L119.448721,45.8173763 C122.212589,45.8173763 124.453146,43.5780534 124.453146,40.8220501 L124.453146,16.6625141" transform="rotate(-180 95.834 31.24)"/>
    <g transform="translate(223 22)">
      <polygon points="57.841 13.857 50.498 21.201 57.841 28.545"/>
      <polygon points="41.296 11.998 48.639 19.342 55.982 11.998"/>
      <path fill="#9B9B9B" fill-rule="nonzero" d="M34.1756103,40.7907551 C34.1764319,40.8347993 34.1788967,40.8785147 34.1788967,40.9227231 C34.1788967,44.5534034 31.2361033,47.4964697 27.6061268,47.4964697 C23.9761502,47.4964697 21.0333568,44.5534034 21.0333568,40.9227231 C21.0333568,40.8770356 21.0358216,40.8320054 21.0368075,40.7864822 L15.9834977,69.8472082 L39.2280986,69.8472082 L35.5069249,48.4473622 L34.1756103,40.7907551 Z"/>
      <path fill="#B6B8BE" fill-rule="nonzero" d="M13.1458685,69.8472082 C11.6965728,69.8472082 10.5167606,71.0265384 10.5167606,72.4767069 L10.5167606,76.4209549 L44.6951643,76.4209549 L44.6951643,72.4767069 C44.6951643,71.0265384 43.5153521,69.8472082 42.0660563,69.8472082 L39.2282629,69.8472082 L15.983662,69.8472082 L13.1458685,69.8472082 Z"/>
      <path fill="#9B9B9B" fill-rule="nonzero" d="M6.57309859,76.4209549 C4.39849765,76.4209549 2.62943662,78.1902788 2.62943662,80.3652028 L52.5824883,80.3652028 C52.5824883,78.1902788 50.8134272,76.4209549 48.6388263,76.4209549 L44.6951643,76.4209549 L10.5167606,76.4209549 L6.57309859,76.4209549 Z"/>
      <path fill="#5C546A" fill-rule="nonzero" d="M1.31488263,80.3652028 C0.588262911,80.3652028 0.000328638498,80.9538818 0.000328638498,81.6799522 C0.000328638498,82.4060225 0.588262911,82.9947015 1.31488263,82.9947015 L53.8970423,82.9947015 C54.623662,82.9947015 55.2115962,82.4060225 55.2115962,81.6799522 C55.2115962,80.9538818 54.623662,80.3652028 53.8970423,80.3652028 L52.5824883,80.3652028 L2.62943662,80.3652028 L1.31488263,80.3652028 Z"/>
      <g id=${styles.satelite} fill-rule="nonzero" transform="translate(18)">
        <path fill="#FF9300" d="M37.9817606,11.998238 L30.6389906,19.342099 L31.5685446,20.2719555 L31.5685446,20.2719555 L32.49777,21.2013189 L39.8405399,13.8574579 L39.8405399,28.5455086 L42.4696479,31.1750073 L42.4696479,11.2279592 L46.0278169,7.66926149 C45.2157512,7.28058872 44.5576526,6.622228 44.1690376,5.81004161 L40.6108685,9.36873934 L20.6671127,9.36873934 L23.2962207,11.998238 L37.9817606,11.998238 L37.9817606,11.998238 Z"/>
        <path fill="#D5D9DE" d="M9.60629108,34.3489765 C11.7565728,34.3489765 13.6654695,35.3818764 14.864507,36.9784751 L27.35277,24.4883566 L6.24185446,3.37446848 C6.877277,2.50410443 7.54474178,1.65181818 8.28220657,0.842754317 C-0.650516432,10.6402663 -2.11690141,25.2729332 4.62873239,36.632203 C5.8341784,35.2347888 7.61622066,34.3489765 9.60629108,34.3489765 Z"/>
        <path fill="#FFCF00" d="M46.0278169,7.66926149 C46.5427934,7.91577699 47.1193897,8.05399001 47.7281925,8.05399001 C49.9062441,8.05399001 51.6718545,6.28811733 51.6718545,4.10974204 C51.6718545,1.93136676 49.9062441,0.165494071 47.7281925,0.165494071 C45.5501408,0.165494071 43.7845305,1.93136676 43.7845305,4.10974204 C43.7845305,4.71863532 43.922723,5.2951529 44.1690376,5.81004161 C44.5576526,6.622228 45.2157512,7.28058872 46.0278169,7.66926149 Z"/>
        <path fill="#B6B8BE" d="M9.60629108,47.4964697 C13.2362676,47.4964697 16.179061,44.5534034 16.179061,40.9227231 C16.179061,40.8785147 16.1765962,40.8347993 16.1757746,40.7907551 L17.5070892,48.4473622 C21.7000235,50.4802933 26.193662,51.4831184 30.6631455,51.4831184 C37.9972066,51.482461 45.2606103,48.7906761 50.9950235,43.5606033 C50.4166197,44.0881465 49.8122535,44.5713168 49.2042723,45.0469274 C48.9607512,45.2352652 48.7195305,45.4282047 48.47223,45.6098045 L48.4715728,45.6102975 L27.35277,24.4883566 L31.5685446,20.2719555 L30.6389906,19.342099 L23.2962207,11.998238 L20.6671127,9.36873934 L12.0758451,0.776030788 C11.5674413,0.266894113 10.8536385,-0.0213646765 10.1386854,0.00115040566 C9.41978873,0.0184064905 8.76119718,0.317676305 8.28237089,0.842754317 C7.54474178,1.65165384 6.877277,2.50410443 6.24201878,3.37446848 L27.35277,24.4883566 L14.864507,36.9784751 C13.6653052,35.3818764 11.7565728,34.3489765 9.60629108,34.3489765 C7.61622066,34.3489765 5.8341784,35.2347888 4.62889671,36.632203 C3.66335681,37.7517121 3.06934272,39.1997441 3.03697183,40.7864822 C3.03598592,40.8320054 3.03352113,40.8770356 3.03352113,40.9227231 C3.03352113,44.5534034 5.97615023,47.4964697 9.60629108,47.4964697 Z M12.2353991,40.9227231 C12.2353991,42.3750281 11.0583803,43.5522218 9.60629108,43.5522218 C8.15420188,43.5522218 6.9771831,42.3750281 6.9771831,40.9227231 C6.9771831,39.4705825 8.15420188,38.2932245 9.60629108,38.2932245 C11.0583803,38.2932245 12.2353991,39.4705825 12.2353991,40.9227231 Z"/>
        <path fill="#9B9B9B" d="M32.49777,21.2013189 L31.5685446,20.2719555 L31.5685446,20.2719555 L27.35277,24.4883566 L48.4715728,45.6104618 L48.47223,45.6099688 C48.7193662,45.428369 48.9605869,45.2354296 49.2042723,45.0470917 C49.8122535,44.5713168 50.4166197,44.0883108 50.9950235,43.5607676 C51.521338,43.0812128 51.8203991,42.4205513 51.8358451,41.7015477 C51.8526056,40.9812295 51.5701408,40.2763595 51.0617371,39.7685375 L42.4696479,31.1750073 L39.8405399,28.5455086 L32.49777,21.2013189 Z"/>
        <ellipse cx="9.606" cy="40.923" fill="#5C546A" rx="2.629" ry="2.629"/>
      </g>
    </g>
    <path fill="#4A4A4A" d="M117,4.99373046 C117,2.23576928 119.234132,0 121.995447,0 L198.004553,0 C200.763462,0 203,2.24165085 203,4.99373046 L203,105 L117,105 L117,4.99373046 Z"/>
    <g transform="translate(145 79)">
      <path fill="#E7ECED" fill-rule="nonzero" d="M24.0517241,13.8965517 L6.94827586,13.8965517 C3.12672414,13.8965517 0,10.7698276 0,6.94827586 C0,3.12672414 3.12672414,0 6.94827586,0 L24.0517241,0 C27.8732759,0 31,3.12672414 31,6.94827586 C31,10.7698276 27.8732759,13.8965517 24.0517241,13.8965517 Z"/>
      <circle cx="24" cy="7" r="4" fill="#D8D8D8" stroke="#979797"/>
    </g>
    <g transform="translate(130 13)">
      <use fill="#FFF" xlink:href="#language-machine-a"/>
      <rect width="61" height="54" x=".5" y=".5" stroke="#979797" rx="4"/>
      <g fill="#000" fill-rule="nonzero" transform="translate(12 9)">
        <path d="M11.5432412,0.109003984 C11.3497588,0.114605578 11.1658366,0.193784861 11.0289572,0.330191235 L8.75269261,2.60110757 C8.45298444,2.8932988 8.44736965,3.37261355 8.74024903,3.67161753 C9.0331284,3.97062151 9.51357198,3.97622311 9.81328016,3.68403187 C9.81752918,3.67994422 9.82177821,3.67570518 9.82587549,3.67146614 L10.806642,2.69300398 L10.806642,9.19206375 L9.2891323,9.19206375 C8.87014786,9.18615936 8.5255214,9.52028685 8.51960311,9.93828685 C8.51368482,10.3562869 8.84859922,10.7001036 9.26758366,10.706008 C9.27471595,10.7061594 9.28184825,10.7061594 9.28898054,10.706008 L11.4411128,10.706008 C11.5222996,10.7193307 11.6050039,10.7193307 11.6861907,10.706008 L13.0827549,10.706008 C13.5017393,10.7119124 13.8463658,10.3777849 13.852284,9.95978486 C13.8582023,9.54178486 13.5232879,9.19796813 13.1043035,9.19206375 C13.0971712,9.19191235 13.0900389,9.19191235 13.0829066,9.19206375 L12.3241518,9.19206375 L12.3241518,0.865370518 C12.324,0.447219124 11.9840778,0.108549801 11.5649416,0.108701195 C11.5578093,0.108701195 11.5505253,0.10885259 11.5432412,0.109003984 Z M19.9112451,0.109003984 C19.7177626,0.114605578 19.5338405,0.193784861 19.3969611,0.330191235 L17.1206965,2.60110757 C16.8184086,2.8907251 16.8085447,3.36988845 17.0988444,3.67146614 C17.389144,3.97304382 17.8694358,3.98288446 18.1717237,3.69326693 C18.1791595,3.68615139 18.1864436,3.67888446 18.1935759,3.67146614 L19.1746459,2.6927012 L19.1746459,9.19206375 L17.6571362,9.19206375 C17.2381518,9.18615936 16.8935253,9.52028685 16.887607,9.93828685 C16.8816887,10.3562869 17.2166031,10.7001036 17.6355875,10.706008 C17.6427198,10.7061594 17.6498521,10.7061594 17.6569844,10.706008 L19.8091167,10.706008 C19.890607,10.7193307 19.9736148,10.7193307 20.0551051,10.706008 L21.4507588,10.706008 C21.8697432,10.7119124 22.2143696,10.3777849 22.2202879,9.95978486 C22.2262062,9.54178486 21.8912918,9.19796813 21.4723074,9.19206375 C21.4651751,9.19191235 21.4580428,9.19191235 21.4509105,9.19206375 L20.6921556,9.19206375 L20.6921556,0.865370518 C20.6920039,0.447219124 20.3520817,0.108549801 19.9329455,0.108701195 C19.9258132,0.108701195 19.9185292,0.10885259 19.9112451,0.109003984 Z M2.81816732,0.114151394 C1.35999222,0.114151394 0.162525292,1.30880478 0.162525292,2.76355378 L0.162525292,8.06235857 C0.162525292,9.51710757 1.35999222,10.711761 2.81816732,10.711761 C4.27634241,10.711761 5.47380934,9.51710757 5.47380934,8.06235857 L5.47380934,2.76355378 C5.47380934,1.30880478 4.27634241,0.114151394 2.81816732,0.114151394 Z M27.9220272,0.114151394 C26.4638521,0.114151394 25.2663852,1.30880478 25.2663852,2.76355378 L25.2663852,8.06235857 C25.2663852,9.51710757 26.4638521,10.711761 27.9220272,10.711761 C29.3802023,10.711761 30.5776693,9.51710757 30.5776693,8.06235857 L30.5776693,2.76355378 C30.5776693,1.30880478 29.3800506,0.114151394 27.9220272,0.114151394 Z M36.2900311,0.114151394 C34.831856,0.114151394 33.6343891,1.30880478 33.6343891,2.76355378 L33.6343891,8.06235857 C33.6343891,9.51710757 34.831856,10.711761 36.2900311,10.711761 C37.7482062,10.711761 38.9456732,9.51710757 38.9456732,8.06235857 L38.9456732,2.76355378 C38.9456732,1.30880478 37.7480545,0.114151394 36.2900311,0.114151394 Z M2.81816732,1.62809562 C3.46174319,1.62809562 3.95629961,2.12149004 3.95629961,2.76355378 L3.95629961,8.06235857 C3.95629961,8.70442231 3.46174319,9.19781673 2.81816732,9.19781673 C2.17459144,9.19781673 1.68003502,8.70442231 1.68003502,8.06235857 L1.68003502,2.76355378 C1.68003502,2.12133865 2.17459144,1.62809562 2.81816732,1.62809562 Z M27.9220272,1.62809562 C28.5656031,1.62809562 29.0601595,2.12149004 29.0601595,2.76355378 L29.0601595,8.06235857 C29.0601595,8.70442231 28.5656031,9.19781673 27.9220272,9.19781673 C27.2784514,9.19781673 26.7838949,8.70442231 26.7838949,8.06235857 L26.7838949,2.76355378 C26.7838949,2.12133865 27.2782996,1.62809562 27.9220272,1.62809562 Z M36.2900311,1.62809562 C36.933607,1.62809562 37.4281634,2.12149004 37.4281634,2.76355378 L37.4281634,8.06235857 C37.4281634,8.70442231 36.933607,9.19781673 36.2900311,9.19781673 C35.6464553,9.19781673 35.1518988,8.70442231 35.1518988,8.06235857 L35.1518988,2.76355378 C35.1518988,2.12133865 35.6463035,1.62809562 36.2900311,1.62809562 Z M3.17538911,13.745251 C2.98190661,13.7508526 2.79798444,13.8300319 2.66110506,13.9664382 L0.384840467,16.2373546 C0.0886225681,16.5331793 0.089077821,17.0126454 0.385599222,17.3080159 C0.681817121,17.6032351 1.16180545,17.6032351 1.45802335,17.3080159 L2.43878988,16.3295538 L2.43878988,22.8286135 L0.921280156,22.8286135 C0.50229572,22.8227092 0.157669261,23.1568367 0.151750973,23.5748367 C0.145832685,23.9928367 0.480747082,24.3366534 0.899731518,24.3425578 C0.906863813,24.3427092 0.913996109,24.3427092 0.921128405,24.3425578 L3.0732607,24.3425578 C3.15475097,24.3558805 3.23775875,24.3558805 3.31924903,24.3425578 L4.71490272,24.3425578 C5.13388716,24.3484622 5.47851362,24.0143347 5.48443191,23.5963347 C5.49035019,23.1783347 5.1554358,22.8345179 4.73645136,22.8286135 C4.72931907,22.8284622 4.72218677,22.8284622 4.71505447,22.8286135 L3.95629961,22.8286135 L3.95629961,14.5019203 C3.95629961,14.0837689 3.61652918,13.7449482 3.197393,13.7449482 C3.19010895,13.7449482 3.18267315,13.7449482 3.17538911,13.745251 Z M19.9112451,13.745251 C19.7177626,13.7508526 19.5338405,13.8300319 19.3969611,13.9664382 L17.1206965,16.2373546 C16.8208366,16.5295458 16.8152218,17.0087092 17.1079494,17.3078645 C17.4008288,17.6070199 17.8811206,17.6126215 18.1809805,17.3205817 C18.1852296,17.316494 18.1894786,17.312255 18.1935759,17.3080159 L19.1746459,16.329251 L19.1746459,22.8286135 L17.6571362,22.8286135 C17.2381518,22.8227092 16.8935253,23.1568367 16.887607,23.5748367 C16.8816887,23.9928367 17.2166031,24.3366534 17.6355875,24.3425578 C17.6427198,24.3427092 17.6498521,24.3427092 17.6569844,24.3425578 L19.8091167,24.3425578 C19.890607,24.3558805 19.9736148,24.3558805 20.0551051,24.3425578 L21.4507588,24.3425578 C21.8697432,24.3484622 22.2143696,24.0143347 22.2202879,23.5963347 C22.2262062,23.1783347 21.8912918,22.8345179 21.4723074,22.8286135 C21.4651751,22.8284622 21.4580428,22.8284622 21.4509105,22.8286135 L20.6921556,22.8286135 L20.6921556,14.5019203 C20.6921556,14.0837689 20.3523852,13.7449482 19.933249,13.7449482 C19.925965,13.7449482 19.9185292,13.7449482 19.9112451,13.745251 Z M28.2790973,13.745251 C28.0856148,13.7508526 27.9016926,13.8300319 27.7648132,13.9664382 L25.4885486,16.2373546 C25.1886887,16.5295458 25.1830739,17.0087092 25.4758016,17.3078645 C25.7686809,17.6070199 26.2489728,17.6126215 26.5488327,17.3205817 C26.5530817,17.316494 26.5573307,17.312255 26.561428,17.3080159 L27.5424981,16.329251 L27.5424981,22.8286135 L26.0249883,22.8286135 C25.6060039,22.8227092 25.2613774,23.1568367 25.2554591,23.5748367 C25.2495409,23.9928367 25.5844553,24.3366534 26.0034397,24.3425578 C26.010572,24.3427092 26.0177043,24.3427092 26.0248366,24.3425578 L28.1769689,24.3425578 C28.2584591,24.3558805 28.3414669,24.3558805 28.4229572,24.3425578 L29.8186109,24.3425578 C30.2375953,24.3484622 30.5822218,24.0143347 30.5881401,23.5963347 C30.5940584,23.1783347 30.259144,22.8345179 29.8401595,22.8286135 C29.8330272,22.8284622 29.8258949,22.8284622 29.8187626,22.8286135 L29.0600078,22.8286135 L29.0600078,14.5019203 C29.0600078,14.0837689 28.7202374,13.7449482 28.3011012,13.7449482 C28.2939689,13.7449482 28.2865331,13.7449482 28.2790973,13.745251 Z M11.1861712,13.750247 C9.72799611,13.750247 8.53052918,14.9449004 8.53052918,16.3996494 L8.53052918,21.6984542 C8.53052918,23.1532032 9.72799611,24.3478566 11.1861712,24.3478566 C12.6443463,24.3478566 13.8418132,23.1532032 13.8418132,21.6984542 L13.8418132,16.3996494 C13.8418132,14.9449004 12.6441946,13.750247 11.1861712,13.750247 Z M36.2900311,13.750247 C34.831856,13.750247 33.6343891,14.9449004 33.6343891,16.3996494 L33.6343891,21.6984542 C33.6343891,23.1532032 34.831856,24.3478566 36.2900311,24.3478566 C37.7482062,24.3478566 38.9456732,23.1532032 38.9456732,21.6984542 L38.9456732,16.3996494 C38.9456732,14.9449004 37.7480545,13.750247 36.2900311,13.750247 Z M11.1861712,15.2641912 C11.8297471,15.2641912 12.3243035,15.7575857 12.3243035,16.3996494 L12.3243035,21.6984542 C12.3243035,22.3405179 11.8297471,22.8339124 11.1861712,22.8339124 C10.5425953,22.8339124 10.0480389,22.3405179 10.0480389,21.6984542 L10.0480389,16.3996494 C10.0480389,15.7574343 10.5424436,15.2641912 11.1861712,15.2641912 Z M36.2900311,15.2641912 C36.933607,15.2641912 37.4281634,15.7575857 37.4281634,16.3996494 L37.4281634,21.6984542 C37.4281634,22.3405179 36.933607,22.8339124 36.2900311,22.8339124 C35.6464553,22.8339124 35.1518988,22.3405179 35.1518988,21.6984542 L35.1518988,16.3996494 C35.1518988,15.7574343 35.6463035,15.2641912 36.2900311,15.2641912 Z M3.17538911,27.3813466 C2.98190661,27.3869482 2.79798444,27.4661275 2.66110506,27.6025339 L0.384840467,29.8734502 C0.0884708171,30.1691235 0.0884708171,30.6484382 0.384840467,30.9441116 C0.681210117,31.2397849 1.1616537,31.2397849 1.45802335,30.9441116 L2.43878988,29.9656494 L2.43878988,36.4644064 L0.921280156,36.4644064 C0.50229572,36.458502 0.157669261,36.7926295 0.151750973,37.2106295 C0.145832685,37.6286295 0.480747082,37.9724462 0.899731518,37.9783506 C0.906863813,37.978502 0.913996109,37.978502 0.921128405,37.9783506 L3.0732607,37.9783506 C3.15475097,37.9916733 3.23775875,37.9916733 3.31924903,37.9783506 L4.71490272,37.9783506 C5.13388716,37.984255 5.47851362,37.6501275 5.48443191,37.2321275 C5.49035019,36.8141275 5.1554358,36.4703108 4.73645136,36.4644064 C4.72931907,36.464255 4.72218677,36.464255 4.71505447,36.4644064 L3.95629961,36.4644064 L3.95629961,28.1377131 C3.95614786,27.7195618 3.61622568,27.3808924 3.19708949,27.3810438 C3.1899572,27.3810438 3.18267315,27.3811952 3.17538911,27.3813466 Z M11.5432412,27.3813466 C11.3497588,27.3869482 11.1658366,27.4661275 11.0289572,27.6025339 L8.75269261,29.8734502 C8.45632296,30.1691235 8.45632296,30.6484382 8.75269261,30.9441116 C9.04906226,31.2397849 9.52950584,31.2397849 9.82587549,30.9441116 L10.806642,29.9656494 L10.806642,36.4644064 L9.2891323,36.4644064 C8.87014786,36.458502 8.5255214,36.7926295 8.51960311,37.2106295 C8.51368482,37.6286295 8.84859922,37.9724462 9.26758366,37.9783506 C9.27471595,37.978502 9.28184825,37.978502 9.28898054,37.9783506 L11.4411128,37.9783506 C11.5222996,37.9916733 11.6050039,37.9916733 11.6861907,37.9783506 L13.0827549,37.9783506 C13.5017393,37.984255 13.8463658,37.6501275 13.852284,37.2321275 C13.8582023,36.8141275 13.5232879,36.4703108 13.1043035,36.4644064 C13.0971712,36.464255 13.0900389,36.464255 13.0829066,36.4644064 L12.3241518,36.4644064 L12.3241518,28.1377131 C12.324,27.7195618 11.9840778,27.3808924 11.5649416,27.3810438 C11.5578093,27.3810438 11.5505253,27.3811952 11.5432412,27.3813466 Z M19.9112451,27.3813466 C19.7177626,27.3869482 19.5338405,27.4661275 19.3969611,27.6025339 L17.1206965,29.8734502 C16.8208366,30.1656414 16.8152218,30.6448048 17.1079494,30.9439602 C17.4008288,31.2431155 17.8811206,31.2487171 18.1809805,30.9566773 C18.1852296,30.9525896 18.1894786,30.9483506 18.1935759,30.9441116 L19.1746459,29.9653466 L19.1746459,36.4644064 L17.6571362,36.4644064 C17.2381518,36.458502 16.8935253,36.7926295 16.887607,37.2106295 C16.8816887,37.6286295 17.2166031,37.9724462 17.6355875,37.9783506 C17.6427198,37.978502 17.6498521,37.978502 17.6569844,37.9783506 L19.8091167,37.9783506 C19.890607,37.9916733 19.9736148,37.9916733 20.0551051,37.9783506 L21.4507588,37.9783506 C21.8697432,37.984255 22.2143696,37.6501275 22.2202879,37.2321275 C22.2262062,36.8141275 21.8912918,36.4703108 21.4723074,36.4644064 C21.4651751,36.464255 21.4580428,36.464255 21.4509105,36.4644064 L20.6921556,36.4644064 L20.6921556,28.1377131 C20.6920039,27.7195618 20.3520817,27.3808924 19.9329455,27.3810438 C19.9258132,27.3810438 19.9185292,27.3811952 19.9112451,27.3813466 Z M28.2790973,27.3813466 C28.0856148,27.3869482 27.9016926,27.4661275 27.7648132,27.6025339 L25.4885486,29.8734502 C25.1886887,30.1656414 25.1830739,30.6448048 25.4758016,30.9439602 C25.7686809,31.2431155 26.2489728,31.2487171 26.5488327,30.9566773 C26.5530817,30.9525896 26.5573307,30.9483506 26.561428,30.9441116 L27.5424981,29.9653466 L27.5424981,36.4644064 L26.0249883,36.4644064 C25.6060039,36.458502 25.2613774,36.7926295 25.2554591,37.2106295 C25.2495409,37.6286295 25.5844553,37.9724462 26.0034397,37.9783506 C26.010572,37.978502 26.0177043,37.978502 26.0248366,37.9783506 L28.1769689,37.9783506 C28.2584591,37.9916733 28.3414669,37.9916733 28.4229572,37.9783506 L29.8186109,37.9783506 C30.2375953,37.984255 30.5822218,37.6501275 30.5881401,37.2321275 C30.5940584,36.8141275 30.259144,36.4703108 29.8401595,36.4644064 C29.8330272,36.464255 29.8258949,36.464255 29.8187626,36.4644064 L29.0600078,36.4644064 L29.0600078,28.1377131 C29.059856,27.7195618 28.7199339,27.3808924 28.3007977,27.3810438 C28.2936654,27.3810438 28.2863813,27.3811952 28.2790973,27.3813466 Z M36.2900311,27.3863426 C34.831856,27.3863426 33.6343891,28.580996 33.6343891,30.035745 L33.6343891,35.3345498 C33.6343891,36.7892988 34.831856,37.9839522 36.2900311,37.9839522 C37.7482062,37.9839522 38.9456732,36.7892988 38.9456732,35.3345498 L38.9456732,30.035745 C38.9456732,28.5811474 37.7480545,27.3863426 36.2900311,27.3863426 Z M36.2900311,28.9002869 C36.933607,28.9002869 37.4281634,29.3936813 37.4281634,30.035745 L37.4281634,35.3345498 C37.4281634,35.9766135 36.933607,36.470008 36.2900311,36.470008 C35.6464553,36.470008 35.1518988,35.9766135 35.1518988,35.3345498 L35.1518988,30.035745 C35.1518988,29.3936813 35.6463035,28.9002869 36.2900311,28.9002869 Z"/>
      </g>
    </g>
    <rect width="244" height="29" x="39" y="113" fill="#FFF" rx="5"/>
    <text fill="#000" font-family="GeezaPro, Geeza Pro" font-size="16">
      <tspan x="227" y="131">منأنعلىيا</tspan>
    </text>
    <text fill="#000" font-family="PingFangSC-Regular, PingFang SC" font-size="16">
      <tspan x="137.8" y="133">θαδεν</tspan>
    </text>
    <text fill="#000" font-family="PingFangSC-Regular, PingFang SC" font-size="16">
      <tspan x="48.5" y="133">你的是</tspan>
    </text>
    <g fill-rule="nonzero" transform="translate(35 43)">
      <path fill="#888693" d="M47.2697407,61.9150418 L19.599655,61.9150418 C19.599655,59.3857531 21.6645088,57.3350837 24.2112924,57.3350837 L42.6579727,57.3350837 C45.2048869,57.334954 47.2697407,59.3857531 47.2697407,61.9150418"/>
      <polygon fill="#4A4A4A" points="41.505 57.335 25.364 57.335 27.67 48.175 39.199 48.175"/>
      <path fill="#4A4A4A" d="M0,39.0149916 L0,4.09251883 C0,1.87919665 1.80664912,0.084958159 4.0352807,0.084958159 L62.8342456,0.084958159 C65.0628772,0.084958159 66.8695263,1.87919665 66.8695263,4.09251883 L66.8695263,39.0149916 L0,39.0149916 Z"/>
      <path fill="#9B9B9B" d="M62.834115,48.1750377 L4.0352807,48.1750377 C1.80664912,48.1750377 0,46.3807992 0,44.167477 L0,39.0149916 L66.8693957,39.0149916 L66.8693957,44.167477 C66.8693957,46.3807992 65.0627466,48.1750377 62.834115,48.1750377"/>
      <g fill="#DA008C" transform="translate(9.142 4.54)">
        <path d="M47.350846 29.8952845L30.0570097 29.8952845C29.4193996 29.8952845 28.9040351 29.3822929 28.9040351 28.7502301 28.9040351 28.1181674 29.4193996 27.6051757 30.0570097 27.6051757L47.350846 27.6051757C47.9884561 27.6051757 48.5038207 28.1181674 48.5038207 28.7502301 48.5036901 29.3822929 47.9883255 29.8952845 47.350846 29.8952845M12.7631735 23.0252176L1.23394932 23.0252176C.596339181 23.0252176.0809746589 22.5122259.0809746589 21.8801632.0809746589 21.2481004.596339181 20.7351088 1.23394932 20.7351088L12.7631735 20.7351088C13.4007836 20.7351088 13.9161481 21.2481004 13.9161481 21.8801632 13.9161481 22.5122259 13.4007836 23.0252176 12.7631735 23.0252176M41.5862339 23.0252176L24.2923977 23.0252176C23.6547875 23.0252176 23.139423 22.5122259 23.139423 21.8801632 23.139423 21.2481004 23.6547875 20.7351088 24.2923977 20.7351088L41.5862339 20.7351088C42.2238441 20.7351088 42.7392086 21.2481004 42.7392086 21.8801632 42.739078 22.5122259 42.2237135 23.0252176 41.5862339 23.0252176M18.5277856 23.0252176C18.3778519 23.0252176 18.2280487 22.9908452 18.0897388 22.9336444 17.9398051 22.8764435 17.8246121 22.7962845 17.7092885 22.6931674 17.5005828 22.4756485 17.3749415 22.1893849 17.3749415 21.8801632 17.3749415 21.5709414 17.5005828 21.2848075 17.7092885 21.067159 17.8246121 20.9641715 17.9399357 20.8840126 18.0897388 20.826682 18.5036238 20.6549498 19.0235595 20.746523 19.3464133 21.067159 19.5539435 21.2846778 19.6807602 21.5823556 19.6807602 21.8801632 19.6807602 22.177841 19.5539435 22.4755188 19.3464133 22.6931674 19.1272593 22.899272 18.8275224 23.0252176 18.5277856 23.0252176M24.2923977 29.8952845L6.9985614 29.8952845C6.36095127 29.8952845 5.84558674 29.3822929 5.84558674 28.7502301 5.84558674 28.1181674 6.36095127 27.6051757 6.9985614 27.6051757L24.2923977 27.6051757C24.9300078 27.6051757 25.4453723 28.1181674 25.4453723 28.7502301 25.4453723 29.3822929 24.9300078 29.8952845 24.2923977 29.8952845M1.23394932 29.8952845C1.08401559 29.8952845.934212476 29.8609121.795902534 29.8037113.657592593 29.7465105.530775828 29.6663515.415452242 29.5632343.206746589 29.3457155.0811052632 29.0594519.0811052632 28.7502301.0811052632 28.6013264.1157154 28.4525523.173311891 28.3151925.230908382 28.1662887.311621832 28.051887.415452242 27.9373556.692202729 27.6740502 1.0841462 27.5595188 1.45192788 27.6282636 1.53381676 27.6396778 1.6018616 27.662636 1.67212671 27.6970084 1.74017154 27.7199665 1.81043665 27.7542092 1.86816374 27.7999958 1.93620858 27.8457824 1.99498051 27.891569 2.052577 27.9373556 2.1562768 28.051887 2.23699025 28.1664184 2.29471735 28.3151925 2.35231384 28.4525523 2.38692398 28.6014561 2.38692398 28.7502301 2.38692398 29.0593222 2.26010721 29.3455858 2.052577 29.5632343 1.99498051 29.6090209 1.93607797 29.6548075 1.86816374 29.7005941 1.81056725 29.7463808 1.74017154 29.7807531 1.67212671 29.8035816 1.6018616 29.837954 1.53381676 29.8607824 1.45192788 29.8723264 1.38388304 29.8837406 1.30316959 29.8952845 1.23394932 29.8952845M47.350846 23.0252176C47.2805809 23.0252176 47.2009123 23.0138033 47.1318226 23.0022594 47.0511092 22.9908452 46.9818889 22.967887 46.9127992 22.9335146 46.8435789 22.9105565 46.7744893 22.8763138 46.7040936 22.8305272 46.6475419 22.7847406 46.5899454 22.738954 46.5323489 22.6931674 46.3236433 22.4756485 46.1980019 22.1779707 46.1980019 21.8801632 46.1980019 21.5824854 46.3236433 21.2848075 46.5323489 21.067159L46.7040936 20.9297992C46.7744893 20.8840126 46.8435789 20.8496402 46.9127992 20.8268117 46.9820195 20.7924393 47.0511092 20.7696109 47.1318226 20.7580669 47.5007797 20.6779079 47.9031715 20.8038536 48.1694737 21.067159 48.215577 21.1243598 48.2616803 21.1816904 48.3077836 21.2503054 48.3538869 21.3075063 48.3873216 21.376251 48.4114834 21.4449958 48.4460936 21.5137406 48.4690799 21.5823556 48.4795283 21.6625146 48.4921969 21.7312594 48.5036901 21.8114184 48.5036901 21.8800335 48.5036901 21.9486485 48.4921969 22.0289372 48.4795283 22.1090962 48.4692105 22.177841 48.4460936 22.2464561 48.4114834 22.3152008 48.3873216 22.3839456 48.3538869 22.4525607 48.3077836 22.5213054 48.2616803 22.5785063 48.215577 22.6358368 48.1694737 22.6930377 48.1118772 22.7388243 48.0529747 22.7846109 47.9965536 22.8303975 47.9273333 22.8761841 47.8570682 22.9105565 47.7890234 22.9333849 47.7187583 22.9677573 47.6507135 22.9905858 47.5688246 23.0021297 47.5006491 23.0138033 47.4199357 23.0252176 47.350846 23.0252176M47.350846 9.28521339L30.0570097 9.28521339C29.4193996 9.28521339 28.9040351 8.77222176 28.9040351 8.140159 28.9040351 7.50809623 29.4193996 6.9951046 30.0570097 6.9951046L47.350846 6.9951046C47.9884561 6.9951046 48.5038207 7.50809623 48.5038207 8.140159 48.5038207 8.77222176 47.9883255 9.28521339 47.350846 9.28521339M47.350846 16.1552803L35.8216218 16.1552803C35.1840117 16.1552803 34.6686472 15.6422887 34.6686472 15.0102259 34.6686472 14.3781632 35.1840117 13.8651715 35.8216218 13.8651715L47.350846 13.8651715C47.9884561 13.8651715 48.5038207 14.3781632 48.5038207 15.0102259 48.5038207 15.6422887 47.9883255 16.1552803 47.350846 16.1552803M26.5982164 16.1552803L24.2923977 16.1552803C23.6547875 16.1552803 23.139423 15.6422887 23.139423 15.0102259 23.139423 14.3781632 23.6547875 13.8651715 24.2923977 13.8651715L26.5982164 13.8651715C27.2358265 13.8651715 27.751191 14.3781632 27.751191 15.0102259 27.751191 15.6422887 27.2358265 16.1552803 26.5982164 16.1552803M41.5862339 2.41527615L24.2923977 2.41527615C23.6547875 2.41527615 23.139423 1.90228452 23.139423 1.27022176 23.139423.638158996 23.6547875.125167364 24.2923977.125167364L41.5862339.125167364C42.2238441.125167364 42.7392086.638158996 42.7392086 1.27022176 42.7392086 1.90228452 42.2237135 2.41527615 41.5862339 2.41527615M47.350846 2.41527615C47.2805809 2.41527615 47.2009123 2.40386192 47.1318226 2.39231799 47.0511092 2.38090377 46.9818889 2.35794561 46.9127992 2.32357322 46.8435789 2.30061506 46.7744893 2.26637238 46.7040936 2.22058577 46.6475419 2.17479916 46.5899454 2.12901255 46.5323489 2.08322594 46.3236433 1.86570711 46.1980019 1.56802929 46.1980019 1.27022176 46.1980019.972543933 46.3236433.674866109 46.5323489.457217573L46.7040936.319857741C46.7744893.27407113 46.8435789.239698745 46.9127992.216870293 46.9820195.182497908 47.0511092.159669456 47.1318226.148125523 47.5007797.0679665272 47.9031715.193912134 48.1694737.457217573 48.215577.51441841 48.2616803.571748954 48.3077836.640364017 48.3538869.697564854 48.3873216.766309623 48.4114834.835054393 48.4460936.903799163 48.4690799.972414226 48.4795283 1.05257322 48.4921969 1.12131799 48.5036901 1.20147699 48.5036901 1.27009205 48.5036901 1.33870711 48.4921969 1.41899582 48.4795283 1.49915481 48.4692105 1.56789958 48.4460936 1.63651464 48.4114834 1.70525941 48.3873216 1.77400418 48.3538869 1.84261925 48.3077836 1.91136402 48.2616803 1.96856485 48.215577 2.0258954 48.1694737 2.08309623 48.1118772 2.12888285 48.0529747 2.17466946 47.9965536 2.22045607 47.9273333 2.26624268 47.8570682 2.30061506 47.7890234 2.32344351 47.7187583 2.3578159 47.6507135 2.38064435 47.5688246 2.39218828 47.5006491 2.40373222 47.4199357 2.41527615 47.350846 2.41527615M25.4453723 9.28521339C25.1456355 9.28521339 24.8447232 9.15926778 24.6267446 8.95316318 24.5230448 8.8386318 24.4423314 8.71268619 24.3846043 8.57532636 24.3268772 8.43796653 24.2923977 8.28906276 24.2923977 8.1402887 24.2923977 7.99138494 24.3270078 7.84261088 24.3846043 7.70525105 24.4422008 7.56789121 24.5229142 7.44194561 24.6267446 7.32741423 24.8918713 7.06410879 25.2954386 6.94957741 25.6632203 7.01832218 25.7451092 7.0297364 25.813154 7.05269456 25.8834191 7.08706695 25.9514639 7.1100251 26.021729 7.14426778 26.0794561 7.19005439 26.147501 7.235841 26.2062729 7.28162762 26.2523762 7.32741423 26.3676998 7.44194561 26.4484133 7.56789121 26.5060097 7.70525105 26.5636062 7.84261088 26.5982164 7.99151464 26.5982164 8.1402887 26.5982164 8.28919247 26.5636062 8.43796653 26.5060097 8.57532636 26.4484133 8.71268619 26.3676998 8.8386318 26.2523762 8.95316318 26.2062729 8.99894979 26.147501 9.0447364 26.0794561 9.09052301 26.0218596 9.13630962 25.9514639 9.17068201 25.8834191 9.19351046 25.813154 9.22788285 25.7451092 9.2507113 25.6632203 9.26225523 25.5951754 9.27379916 25.514462 9.28521339 25.4453723 9.28521339M31.2099844 16.1552803C30.8975789 16.1552803 30.6093353 16.0293347 30.3913567 15.8232301 30.1826511 15.6057113 30.0570097 15.3080335 30.0570097 15.0102259 30.0570097 14.7125481 30.1826511 14.4148703 30.3913567 14.1972218 30.8179103 13.7735983 31.6019279 13.7735983 32.0284815 14.1972218 32.2360117 14.4147406 32.3628285 14.7124184 32.3628285 15.0102259 32.3628285 15.0903849 32.3513353 15.1591297 32.3386667 15.2392887 32.3283489 15.3080335 32.305232 15.3766485 32.2706218 15.4453933 32.24646 15.5141381 32.2130253 15.5827531 32.166922 15.6514979 32.1208187 15.7086987 32.0747154 15.7660293 32.0286121 15.8232301 31.8094581 16.0293347 31.5212144 16.1552803 31.2099844 16.1552803"/>
      </g>
      <polygon fill="#ECBA16" points="10.376 20.695 26.517 20.695 26.517 4.665 10.376 4.665"/>
    </g>
  </g>
</svg>`;
};