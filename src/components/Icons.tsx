import 'preact/jsx-runtime'

type IconProps = {
  className?: string
}

export function GithubIcon({ className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
    >
      <path d='M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z' />
    </svg>
  )
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
    >
      <path d='M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z' />
    </svg>
  )
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
    >
      <path d='M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z' />
      <circle cx='1.75' cy='1.75' r='1.75' />
    </svg>
  )
}

export function WarningIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      class={className}
    >
      <rect fill='none' />
      <line
        x1='128'
        x2='128'
        y1='104'
        y2='144'
        fill='none'
        stroke='#000'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
      />
      <path
        fill='none'
        stroke='#000'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='16'
        d='M114.15243,39.98472,26.17616,191.977a16.00005,16.00005,0,0,0,13.84762,24.01535H215.97625A16,16,0,0,0,229.82386,191.977L141.84757,39.98472A16,16,0,0,0,114.15243,39.98472Z'
      />
      <circle cx='128' cy='180' r='12' />
    </svg>
  )
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      class={className}
    >
      <g data-name='16'>
        <rect width='24' height='24' fill='none' />
        <path d='M14.16,14.72a.75.75,0,0,1,0,1.06.76.76,0,0,1-1.07,0L9.84,12.53a.75.75,0,0,1,0-1.06l3.25-3.25a.77.77,0,0,1,1.07,0,.75.75,0,0,1,0,1.06L11.44,12Z' />
      </g>
    </svg>
  )
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      class={className}
    >
      <g data-name='17'>
        <rect
          width='24'
          height='24'
          fill='none'
          transform='rotate(180 12 12)'
        />
        <path d='M9.84,14.72A.75.75,0,0,0,10.38,16a.74.74,0,0,0,.53-.22l3.25-3.25a.75.75,0,0,0,0-1.06L10.91,8.22a.77.77,0,0,0-1.07,0,.75.75,0,0,0,0,1.06L12.56,12Z' />
      </g>
    </svg>
  )
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      class={className}
    >
      <path
        fill-rule='evenodd'
        d='M14.1922 15.6064C13.0236 16.4816 11.5723 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5723 16.4816 13.0236 15.6064 14.1922L20.7782 19.364C21.1687 19.7545 21.1687 20.3877 20.7782 20.7782C20.3876 21.1687 19.7545 21.1687 19.364 20.7782L14.1922 15.6064ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z'
        clip-rule='evenodd'
      />
    </svg>
  )
}

export function RedditIcon({ className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
    >
      <path d='M6 9.5l-.5-.001V9.5zM10.5 9.5h.5l-.5-.001z' />
      <path d='M16.07 8c0-1.103-.897-2-2-2-.441 0-.86.144-1.202.405-1.116-.775-2.578-1.237-4.133-1.354l.839-1.968 2.441.57C12.093 4.408 12.725 5 13.5 5c.827 0 1.5-.673 1.5-1.5S14.327 2 13.5 2c-.524 0-.985.271-1.253.68l-2.853-.667a.5.5 0 0 0-.575.291l-1.16 2.72c-1.679.058-3.279.531-4.487 1.355A2.002 2.002 0 0 0 0 8a1.98 1.98 0 0 0 1.011 1.731A2.978 2.978 0 0 0 1 10c0 2.757 3.14 5 7 5 3.859 0 7-2.243 7-5 0-.078-.003-.155-.008-.232A1.98 1.98 0 0 0 16.07 8zM13.5 3a.5.5 0 1 1-.002 1.002A.5.5 0 0 1 13.5 3zm-9 6.5c0-.551.449-1 1-1s1 .449 1 1a1.001 1.001 0 0 1-2 0zm5.809 3.317a3.936 3.936 0 0 1-4.618 0 .5.5 0 1 1 .586-.81 2.933 2.933 0 0 0 3.446 0 .5.5 0 1 1 .586.81zM10.5 10.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
    </svg>
  )
}

export function LinkIcon({ className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <path d='M324.958 187.046c58.347 58.407 57.546 152.048.352 209.56a10.76 10.76 0 0 1-.352.361l-65.625 65.625c-57.881 57.881-152.05 57.873-209.922 0-57.881-57.871-57.881-152.05 0-209.921l36.236-36.236c9.609-9.609 26.158-3.223 26.654 10.357.633 17.307 3.736 34.694 9.463 51.485 1.939 5.686.554 11.975-3.694 16.223l-12.78 12.78c-27.369 27.369-28.228 71.933-1.128 99.57 27.367 27.909 72.35 28.075 99.927.498l65.625-65.615c27.53-27.53 27.415-72.028 0-99.443-3.614-3.607-7.255-6.41-10.099-8.368a15.66 15.66 0 0 1-6.784-12.311c-.387-10.319 3.27-20.953 11.424-29.107l20.561-20.561c5.392-5.392 13.85-6.054 20.102-1.69a148.956 148.956 0 0 1 20.04 16.793z' />
      <path d='M462.59 49.408c-57.872-57.873-152.041-57.881-209.922 0l-65.625 65.625c-.117.117-.244.244-.352.361-57.193 57.512-57.995 151.153.352 209.56a148.906 148.906 0 0 0 20.04 16.793c6.252 4.363 14.711 3.7 20.102-1.69l20.561-20.561c8.154-8.154 11.811-18.788 11.424-29.107a15.659 15.659 0 0 0-6.784-12.31c-2.844-1.958-6.484-4.761-10.099-8.368-27.415-27.415-27.53-71.913 0-99.443l65.625-65.615c27.577-27.577 72.559-27.411 99.927.498 27.1 27.637 26.242 72.201-1.128 99.57l-12.78 12.78c-4.248 4.248-5.634 10.537-3.694 16.223 5.727 16.791 8.83 34.179 9.463 51.485.497 13.58 17.045 19.967 26.654 10.357l36.236-36.236c57.88-57.872 57.88-152.051 0-209.922z' />
    </svg>
  )
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path d='M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z' />
    </svg>
  )
}

export function ZulipIcon({ className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox='0 0 256 298'
    >
      <path d='M 0,0 H 220.5 L 154,68 H 32 z' />
      <path d='M 224,0 L 256,68 L 100.5,227.5 L 2.5,227.5 z' />
      <path d='M 0,230 H 224 L256,298 H 32 z' />
    </svg>
  )
}

export function TickIcon({ className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 66.1 66.1'
    >
      <path d='M8.86,33a4.69,4.69,0,0,1,.75.24q7,3.53,14,7.06a.53.53,0,0,0,.7-.08q8.48-7.66,17-15.3L56.39,11.35a2.43,2.43,0,0,1,2.2-.75,1.87,1.87,0,0,1,1,3.11l-4.08,4.84L39.16,38,27.05,52.35l-2.29,2.73a.93.93,0,0,1-1.6,0L6.45,37a1.23,1.23,0,0,1-.06-1.77c.38-.49.77-1,1.13-1.5A1.7,1.7,0,0,1,8.86,33Z' />
    </svg>
  )
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg
      class={className}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    >
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
    </svg>
  )
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      class={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      stroke-width='2'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
}

export function LocationIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      class={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      stroke-width='2'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
      />
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
      />
    </svg>
  )
}

export function PencilIcon({ className }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      class={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      stroke-width='2'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
      />
    </svg>
  )
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <svg
      class={className}
      version='1.1'
      x='0px'
      y='0px'
      viewBox='0 0 3.04 2.81'
      style='enable-background:new 0 0 3.04 2.81;'
    >
      <g>
        <path
          d='M1.13,1.58v1.22H0V1.85c0-0.53,0.07-0.93,0.21-1.2S0.6,0.16,0.96,0l0.26,0.41C0.79,0.59,0.58,0.98,0.58,1.58H1.13z
M2.94,1.58v1.22H1.81V1.85c0-0.47,0.06-0.85,0.18-1.15C2.11,0.41,2.37,0.18,2.77,0l0.26,0.41C2.6,0.59,2.39,0.98,2.39,1.58H2.94z'
        />
      </g>
    </svg>
  )
}
