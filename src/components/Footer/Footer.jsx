import style from "../Footer/Footer.module.scss";

export function Footer() {

  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.items}>
          <div className="">React Spa</div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
             
              width="40px"
              height="40px"
              viewBox="0 0 40 40"
              version="1.1"
            >
              <g id="surface1">
                <path
                  
                  d="M 20.117188 2.15625 C 20.054688 1.734375 19.734375 1.390625 19.3125 1.328125 C 17.585938 1.085938 15.828125 1.398438 14.28125 2.21875 L 8.5 5.304688 C 6.960938 6.125 5.71875 7.414062 4.953125 8.984375 L 2.085938 14.890625 C 1.320312 16.460938 1.070312 18.242188 1.375 19.960938 L 2.507812 26.429688 C 2.8125 28.15625 3.648438 29.734375 4.90625 30.953125 L 9.617188 35.515625 C 10.875 36.734375 12.476562 37.515625 14.203125 37.757812 L 20.6875 38.671875 C 22.414062 38.914062 24.171875 38.601562 25.71875 37.78125 L 31.5 34.695312 C 33.039062 33.875 34.28125 32.585938 35.046875 31.007812 L 37.914062 25.109375 C 38.679688 23.539062 38.929688 21.757812 38.625 20.039062 C 38.554688 19.625 38.210938 19.3125 37.796875 19.25 C 33.773438 18.609375 30.546875 15.570312 29.632812 11.640625 C 29.492188 11.046875 29.007812 10.59375 28.40625 10.5 C 24.140625 9.820312 20.773438 6.4375 20.109375 2.15625 Z M 16.25 16.25 C 14.867188 16.25 13.75 15.132812 13.75 13.75 C 13.75 12.367188 14.867188 11.25 16.25 11.25 C 17.632812 11.25 18.75 12.367188 18.75 13.75 C 18.75 15.132812 17.632812 16.25 16.25 16.25 Z M 16.25 26.25 C 16.25 27.632812 15.132812 28.75 13.75 28.75 C 12.367188 28.75 11.25 27.632812 11.25 26.25 C 11.25 24.867188 12.367188 23.75 13.75 23.75 C 15.132812 23.75 16.25 24.867188 16.25 26.25 Z M 28.75 26.25 C 27.367188 26.25 26.25 25.132812 26.25 23.75 C 26.25 22.367188 27.367188 21.25 28.75 21.25 C 30.132812 21.25 31.25 22.367188 31.25 23.75 C 31.25 25.132812 30.132812 26.25 28.75 26.25 Z M 28.75 26.25 "
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}