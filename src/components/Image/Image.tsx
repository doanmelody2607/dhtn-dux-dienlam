import classNames from 'classnames/bind';
import { forwardRef, ImgHTMLAttributes, useState } from 'react';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import images from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    fallback?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
    ({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
        const [fallback, setFallback] = useState<string>('');

        const handleError = () => {
            setFallback(customFallback);
        };

        const classes = cx('wrapper', className);

        return (
            <PhotoView src={src}>
                <img
                    className={classes}
                    ref={ref}
                    src={fallback || src}
                    alt={alt}
                    {...props}
                    onError={handleError}
                />
            </PhotoView>
        );
    },
);

export default Image;
