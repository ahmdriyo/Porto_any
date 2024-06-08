import React, { useState } from "react";
import { motion } from "framer-motion";
import mobileApp3 from "../../public/img/mobileApp3.svg";
import Image from "next/image";
import Modal from "../component/modal";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface CardProps {
  title: string;
  image: string;
  tags: string[];
  backgroundColor: string;
}

const Card = ({ title, image, tags, backgroundColor }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        onClick={openModal}
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.1 }}
        className={`flex flex-col justify-center items-center card fade-in ${isVisible ? 'visible' : ''}`}
        style={{ backgroundColor }}
        ref={containerRef}
      >
        <div className="card-top">
          <Image alt={title} src={image} />
        </div>
        <div className="card-bottom flex flex-col">
          <div className="mt-2 mb-1">
            <h1 className="font-sans font-bold">{title}</h1>
          </div>
          <div className="card-item-bottom flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag} className="border-item-card">
                {tag}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="bg-fuchsia-300 ml-10 card-modal" style={{ backgroundColor }}>
          <div className="card-top">
            <Image alt={title} src={image} />
          </div>
          <div className="card-bottom-modal flex flex-col">
            <div className="mt-2 mb-1">
              <h1 className="font-sans font-bold">{title}</h1>
            </div>
            <div className="card-item-bottom flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag} className="border-item-card">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
