import clsx from 'clsx';

export function RowContainer(props: {
    children: React.ReactNode;
    className?: string;
    noResponsive?: boolean;
}) {
    return (
        <div
            className={clsx(
                props.className,
                'flex',
                props.noResponsive ? 'flex-row' : 'flex-col lg:flex-row'
            )}
        >
            {props.children}
        </div>
    );
}

export function ColumnContainer(props: { children: React.ReactNode; className?: string }) {
    return <div className={clsx(props.className, 'flex flex-col')}>{props.children}</div>;
}

export function Section(props: {
    children: React.ReactNode;
    className?: string;
    innerClassName?: string;
}) {
    return (
        <div className={clsx(props.className)}>
            <div className={clsx('max-w-[1000px] mx-auto', props.innerClassName)}>
                <div className="mx-4 md:mx-16 lg:mx-4">{props.children}</div>
            </div>
        </div>
    );
}
