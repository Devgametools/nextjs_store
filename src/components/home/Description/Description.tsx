'use client';
import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './Description.module.sass';

const PLACEHOLDER_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYa";

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);

  const handleClick = () => setBorder(!hasBorder);

  const cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  });

  console.log(`Border state: ${hasBorder}`);

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <figure className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="Description Image"
            fill
            sizes="(max-width: 1000px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder='blur'
            blurDataURL={PLACEHOLDER_URL}
          />
        </figure>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us</p>
      </div>
    </section>
  );
}