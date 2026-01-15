'use client'

import { useState } from 'react'
import { ArrowLeft, Upload, LogIn, LogOut, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const recentActivity = [
  { id: 1, slotNo: 'A-12', vehicleNo: 'MH12AB1234', userName: 'John Doe', vehicleType: '4-Wheeler', action: 'Entered', time: '10:30 AM' },
  { id: 2, slotNo: 'B-05', vehicleNo: 'MH14CD5678', userName: 'Jane Smith', vehicleType: '2-Wheeler', action: 'Exited', time: '10:15 AM' },
  { id: 3, slotNo: 'C-23', vehicleNo: 'MH01EF9012', userName: 'Mike Johnson', vehicleType: '4-Wheeler', action: 'Entered', time: '09:45 AM' },
  { id: 4, slotNo: 'A-08', vehicleNo: 'MH22GH3456', userName: 'Sarah Williams', vehicleType: '2-Wheeler', action: 'Exited', time: '09:30 AM' },
]

export default function EntryExitPage({ onBack }) {
  const [vehicleNumber, setVehicleNumber] = useState('')
  const [uploadedImage, setUploadedImage] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [actionType, setActionType] = useState('')

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result)
        setVehicleNumber('MH12XY7890') // Mock OCR result
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAction = (type) => {
    setActionType(type)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setVehicleNumber('')
      setUploadedImage(null)
    }, 2000)
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Button onClick={onBack} variant="outline" size="icon">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Mark Entry / Exit
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Record vehicle movements
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Car className="w-6 h-6 mr-2 text-blue-600" />
            Vehicle Details
          </h3>

          {/* Manual Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Enter Vehicle Number
            </label>
            <Input
              type="text"
              placeholder="e.g., MH12AB1234"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
              className="text-lg font-mono"
            />
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            <span className="px-4 text-sm text-gray-500 dark:text-gray-400">OR</span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Upload Vehicle Number Image
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                {uploadedImage ? (
                  <div>
                    <img src={uploadedImage} alt="Uploaded" className="max-h-32 mx-auto mb-2 rounded" />
                    <p className="text-sm text-green-600 dark:text-green-400">Image uploaded successfully</p>
                  </div>
                ) : (
                  <div>
                    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => handleAction('entry')}
              disabled={!vehicleNumber}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Mark Entry
            </Button>
            <Button
              onClick={() => handleAction('exit')}
              disabled={!vehicleNumber}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-6"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Mark Exit
            </Button>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg">
              <p className="text-green-800 dark:text-green-200 text-center font-medium">
                ✓ Vehicle {vehicleNumber} marked as {actionType === 'entry' ? 'Entered' : 'Exited'} successfully!
              </p>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Activity
          </h3>
          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-mono font-bold text-gray-900 dark:text-white">
                      {activity.vehicleNo}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {activity.userName}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    activity.action === 'Entered' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {activity.action}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Slot: {activity.slotNo} • {activity.vehicleType}</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
