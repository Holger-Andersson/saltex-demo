// Formning-ikonen inline som SVG: spaden gräver ner sig i den gröna högen och
// lyfter sedan upp med ett skoptag, medan högen ligger still.
//
// Originalikonens gröna hög-båge är sammanflätad med spadens siluett i en och
// samma path (samma konturlinje ritad i ett svep), så de går inte att separera
// utan att lämna kvar ett "spöke" av spaden när den flyttas. Högen är därför
// omritad som en egen, fristående form här — spaden (bladet + konturen) är
// oförändrad från originalet.
export function ShapingIcon({
  className,
  animationDelay,
  active,
}: {
  className?: string;
  animationDelay?: string;
  active?: boolean;
}) {
  return (
    <svg viewBox="0 0 273 273" className={className} aria-hidden="true">
      <path
        d="M95,195 C120,120 155,95 190,95 C225,95 245,130 260,195"
        fill="none"
        stroke="#b0c25a"
        strokeWidth={10}
        strokeLinecap="round"
      />
      <path
        d="M0 0 C3 0.25 3 0.25 5 2.25 C4.625 5.875 4.625 5.875 4 9.25 C0.625 9.875 0.625 9.875 -3 10.25 C-5 8.25 -5 8.25 -5.25 5.25 C-4.90584825 1.120179 -4.129821 0.34415175 0 0 Z"
        fill="#BECD79"
        transform="translate(126,134.75)"
      />
      <path
        d="M0 0 C3 0.25 3 0.25 5 2.25 C5.36487512 5.09602594 5.40199375 6.6364306 3.8125 9.0625 C1.3864306 10.65199375 -0.15397406 10.61487512 -3 10.25 C-5 8.25 -5 8.25 -5.25 5.25 C-4.90584825 1.120179 -4.129821 0.34415175 0 0 Z"
        fill="#BECD79"
        transform="translate(140,127.75)"
      />
      <path
        d="M0 0 C3.625 0.375 3.625 0.375 7 1 C8.33157895 6.44736842 8.33157895 6.44736842 6.875 8.875 C4.40522151 10.3568671 2.83386167 10.3633156 0 10 C-2 8 -2 8 -2.25 5 C-2 2 -2 2 0 0 Z"
        fill="#BECC78"
        transform="translate(125,149)"
      />

      <g
        className={active ? "play-icon-dig" : ""}
        style={{ animationDelay, transformOrigin: "135px 110px" }}
      >
        <path
          d="M0 0 C4.95 0 9.9 0 15 0 C15 2.97 15 5.94 15 9 C15.66 9 16.32 9 17 9 C17 6.36 17 3.72 17 1 C21.62 1 26.24 1 31 1 C32.96464548 16.14166167 27.78528568 26.2171482 20 39 C13.4316901 39.24532242 9.8782647 38.37714317 5 34 C-3.02273202 23.93691885 -0.98233616 12.0063309 0 0 Z"
          fill="#FCFCFC"
          stroke="#595A5C"
          strokeWidth={3}
          strokeLinejoin="round"
          transform="translate(85,117)"
        />
        <path
          d="M0 0 C8.58 0 17.16 0 26 0 C26 0.99 26 1.98 26 3 C22.04 3 18.08 3 14 3 C14 14.88 14 26.76 14 39 C19.61 39 25.22 39 31 39 C31.04125 41.43375 31.0825 43.8675 31.125 46.375 C31.14320801 47.13989746 31.16141602 47.90479492 31.18017578 48.69287109 C31.1948117 50.46287275 31.09928514 52.23272455 31 54 C30.34 54.66 29.68 55.32 29 56 C29 51.05 29 46.1 29 41 C24.05 41 19.1 41 14 41 C14 43.97 14 46.94 14 50 C13.34 50 12.68 50 12 50 C12 47.03 12 44.06 12 41 C7.05 41 2.1 41 -3 41 C-3 45.95 -3 50.9 -3 56 C-3.99 56 -4.98 56 -6 56 C-6.02684679 53.35409986 -6.04676357 50.70846904 -6.0625 48.0625 C-6.07087891 47.30775391 -6.07925781 46.55300781 -6.08789062 45.77539062 C-6.09652441 43.85005687 -6.05224333 41.92464419 -6 40 C-5.505 39.505 -5.505 39.505 -5 39 C0.28 39 5.56 39 11 39 C11 27.12 11 15.24 11 3 C7.37 3 3.74 3 0 3 C0 2.01 0 1.02 0 0 Z"
          fill="#595A5C"
          transform="translate(88,76)"
        />
      </g>
    </svg>
  );
}
