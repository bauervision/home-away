import { Button } from '@/components/ui/button'
import React from 'react'

function HomePage() {
  return (
    <div className='text-3xl'>
      Home Page
      <Button variant="outline" size="lg" className="capitalize m-8">
        Click me
      </Button>
    </div>
  )
}

export default HomePage
