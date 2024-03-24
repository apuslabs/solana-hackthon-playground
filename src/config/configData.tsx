import { Icon } from '../components/SvgIcon'
import { ArtDeco, Style3D, Cyberpunk, FlatDesign, Futuristic, Isometric, LowPoly, PopArt, Psychedelic, Vintage } from '../assets/image'
import { ReactElement } from 'react'

export interface Options {
  value: string
  label: string
  headType: 'icon' | 'image'
  icon?: ReactElement
  imageUrl?: string
  prompt?: string
}

export const aspectList: Options[] = [
  {
    label: 'Square (1 : 1)',
    value: '1:1',
    headType: 'icon',
    icon: <Icon name="Square" />
  },
  {
    label: 'Widescreen (16 : 9)',
    value: '16:9',
    headType: 'icon',
    icon: <Icon name="Widescreen" />
  },
  {
    label: 'Mobile (9 : 16)',
    value: '9:16',
    headType: 'icon',
    icon: <Icon name="Mobile" />
  },
  {
    label: 'Landscape (3 : 2)',
    value: '3:2',
    headType: 'icon',
    icon: <Icon name="Landscape" />
  },
  {
    label: 'Portrait (2 : 3)',
    value: '2:3',
    headType: 'icon',
    icon: <Icon name="Portrait" />
  }
]

export const StyleList: Options[] = [
  {
    label: 'Art Deco',
    value: 'Art Deco',
    headType: 'image',
    imageUrl: ArtDeco,
    prompt: 'art deco, sci-fi, cyberpunk, cityscape'
  },
  {
    label: 'Psychedelic',
    value: 'Psychedelic',
    headType: 'image',
    imageUrl: Psychedelic,
    prompt: 'Psychedelic model looking at the viewer, award-winning portrait photography, 1woman, focus face, vivid, with fractals in the background, alien woman, detailed, third eye, glowing eyes, fractal pattern, a light smile'
  },
  {
    label: '3D Style',
    value: '3D Style',
    headType: 'image',
    imageUrl: Style3D,
    prompt: 'Cute rabbit wearing a jacket, eating a carrot, 3D Style, rendering'
  },
  {
    label: 'Futuristic',
    value: 'Futuristic',
    headType: 'image',
    imageUrl: Futuristic,
    prompt: 'futuristic, robot, glass construct, titan, glass armor, mosaic, magical symbols, mystic power, floating particles, steam, reflections, battlefield in background, cinematic atmosphere,, magnificent, finely detailed background, Depth of Field'
  },
  {
    label: 'Pop Art',
    value: 'Pop Art',
    headType: 'image',
    imageUrl: PopArt,
    prompt: 'Pop Art style, portrait of an iconic female celebrity, vivid colors, color splash'
  },
  {
    label: 'Flat Design',
    value: 'Flat Design',
    headType: 'image',
    imageUrl: FlatDesign,
    prompt: 'FlatIcon of a light bulb with a blue background <lora:flaticon_v1_2:0.8>'
  },
  {
    label: 'Isometric',
    value: 'Isometric',
    headType: 'image',
    imageUrl: Isometric,
    prompt: 'isometric view, isometric style, outdoors, sky, night, moon, neon, building, star (sky), night sky, scenery, city, sign, wide shot, crescent moon, neon lights'
  },
  {
    label: 'Cyberpunk',
    value: 'Cyberpunk',
    headType: 'image',
    imageUrl: Cyberpunk,
    prompt: 'beautiful cyberpunk woman, (wearing head-mounted display:1.2), LCD screens and fiber optic cables, inspired by netrunner, cyberpunk style'
  },
  {
    label: 'Vintage',
    value: 'Vintage',
    headType: 'image',
    imageUrl: Vintage,
    prompt: 'vintage style, vintage dress, solo, 1girl, photograph, a woman in a white dress in a garden'
  },
  {
    label: 'Low Poly',
    value: 'Low Poly',
    headType: 'image',
    imageUrl: LowPoly,
    prompt: 'low poly style, (low poly art), 1girl, solo, sunglasses, lips, red hair, long hair, portrait'
  },
]