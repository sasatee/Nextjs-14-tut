"use client";


import FileInput from '@/app/components/fileUpload';
import { PencilIcon } from '@heroicons/react/20/solid';
import { useDisclosure, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';
import React, { useState } from 'react'

export default function UploadAvatar() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [image,setImage] = useState<File>()

    
  return (
    <div className=''>
      <button onClick={onOpen}>
      <PencilIcon className='w-6 text-slate-500 hover:text-primart transition-color'/>
      </button>
       <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Upload Avatar</ModalHeader>
              <ModalBody>
               <FileInput onChange={(e) => setImage((e as any).target.files[0])}/>
               {image && <Image src={URL.createObjectURL(image)}  />}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={onClose}>
                  Change avatar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
