import React, { ReactElement } from 'react';
import { fonts } from '../constants/styles';
import { Mode } from '../redux/features/modeSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import colors, { ColorScheme, Colors } from '../constants/colors';

const Footer: React.FC = (): ReactElement => {
    const mode: Mode = useSelector((state: RootState) => state.config.mode);
    const textColor: string = `${
        (colors[mode as keyof Colors] as ColorScheme).text
    }`;
    return (
        <div
            className="w-full py-12 px-6 flex flex-col justify-center items-center"
            style={{ color: textColor }}>
            <span className={`${fonts['text-normal']} text-center`}>
                Built with <strong>React with Typescript</strong>,{' '}
                <strong>Redux</strong>, and <strong>Tailwind CSS</strong>.
            </span>

            <span className={`${fonts['text-normal']} text-center`}>
                Gradient backgrounds from <strong>Codioful</strong> on{' '}
                <a
                    href="https://unsplash.com/@codioful"
                    target="_blank"
                    rel="noreferrer"
                    className={fonts['text-link']}>
                    Unsplash
                </a>
                .{' '}
            </span>
            <span className={`${fonts['text-normal']} text-center`}>
                This is an <strong>old version</strong> of the website. View the
                new website{' '}
                <a
                    href="https://melissaharijanto.github.io"
                    target="_blank"
                    rel="noreferrer"
                    className={fonts['text-link']}>
                    here
                </a>
                .
            </span>
        </div>
    );
};

export default Footer;
