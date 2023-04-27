"use client";
type Props = {
    data: any;
    className?: string;
};
export default function Slider({ data, className }: Props) {
    return (
        <div className={`slider ${className}`}>
            <span className="slider__label">{data.rate}</span>
            <div className="slider__item">
                <span className="slider__item--bg" />
                <span
                    className={`slider__item--active`}
                    style={{ height: `${data?.percent}%` }}
                />
            </div>
            <span className="slider__label">{data.label}</span>
        </div>
    );
}
