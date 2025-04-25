import { create } from 'zustand'

interface RoomImagesState {
  files: File[]
  previewUrls: string[]
  addFiles: (newFiles: File[]) => void
  removeFile: (index: number) => void
  clearFiles: () => void
}

export const useRoomImagesStore = create<RoomImagesState>((set) => ({
  files: [],
  previewUrls: [],
  addFiles: (newFiles) => {
    set((state) => {
      const updatedFiles = [...state.files, ...newFiles]
      const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file))
      return {
        files: updatedFiles,
        previewUrls: [...state.previewUrls, ...newPreviewUrls]
      }
    })
  },
  removeFile: (index) => {
    set((state) => {
      const newFiles = [...state.files]
      const newPreviewUrls = [...state.previewUrls]
      URL.revokeObjectURL(newPreviewUrls[index])
      newFiles.splice(index, 1)
      newPreviewUrls.splice(index, 1)
      return {
        files: newFiles,
        previewUrls: newPreviewUrls
      }
    })
  },
  clearFiles: () => {
    set((state) => {
      state.previewUrls.forEach(url => URL.revokeObjectURL(url))
      return {
        files: [],
        previewUrls: []
      }
    })
  }
})) 