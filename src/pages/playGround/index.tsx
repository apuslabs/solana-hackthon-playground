import { FC, useState, ChangeEvent } from 'react'
import DropSelect from '../../components/DropSelect'
import { aspectList, StyleList } from '../../config/configData'
import type { Options } from '../../config/configData'
import { Icon } from '../../components/SvgIcon'

interface formData {
  aspect: string
  model: string
  style: string
  advanced: string
  prompt: string
}

const PlayGround: FC = (props) => {

  const [formData, setFormData] = useState<formData>({
    aspect: '1:1',
    model: '1:1',
    style: 'Art Deco',
    advanced: 'blurry, blur, text, watermark, render, 3D, NSFW, nude, CGI, monochrome, B&W, cartoon, painting, smooth, plastic, blurry, low-resolution, deep-fried, oversaturated',
    prompt: ''
  })

  const handleAdChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setFormData({
      ...formData,
      advanced: value
    })
  }

  return (
    <div className="flex">
      <div className="w-80 mt-12">
        <div className="min-h-96 bg-white rounded-lg p-3 shadow-[0px_20px_42px_-2px_rgba(0,0,0,0.25)]">
          <div className="text-lg">Aspect Ratio</div>
          <DropSelect data={aspectList} value={formData.aspect} onChange={(data: Options) => setFormData({ ...formData, aspect: data.value })} />
          <div className="text-lg mt-3">Model</div>
          <DropSelect data={aspectList} value={formData.model} onChange={(data: Options) => setFormData({ ...formData, model: data.value })} />
          <div className="text-lg mt-3">Style</div>
          <DropSelect data={StyleList} value={formData.style} onChange={(data: Options) => setFormData({ ...formData, style: data.value })} />

          <div className="collapse bg-white">
            <input type="checkbox" /> 
            <div className="collapse-title text-lg pl-0 flex items-center h-[28px] hover:bg-[#e6e6e6]">
              <Icon name="Down" size={24} />
              <span>Advanced Settings</span>
            </div>
            <div className="collapse-content px-1"> 
              <textarea value={formData.advanced} onChange={(e) => handleAdChange(e)} className="textarea textarea-bordered w-full bg-neutral h-28"></textarea>
            </div>
          </div>
        </div>

        <div className="min-h-44 bg-white rounded-lg p-3 mt-3 shadow-[0px_20px_42px_-2px_rgba(0,0,0,0.25)]">
          <div className="text-lg">Prompt</div>
          <textarea value={formData.prompt} onChange={(e) => handleAdChange(e)} className="textarea textarea-bordered w-full bg-neutral h-28"></textarea>
        </div>

        <button className="btn w-full mt-3 shadow-[0px_20px_42px_-2px_rgba(0,0,0,0.25)] bg-[#c4c4c4] border-0 text-xl font-normal	">Generate</button>
      </div>

      <div className='flex-1 h-screen bg-base-100 ml-5 mt-3'></div>
    </div>
  )
}

export default PlayGround