import clsx from 'clsx';

export function RowContainer(props: { children: React.ReactNode; className?: string }) {
    return <div className={clsx(props.className, 'flex flex-row')}>{props.children}</div>;
}

export function ColumnContainer(props: { children: React.ReactNode; className?: string }) {
    return <div className={clsx(props.className, 'flex flex-col')}>{props.children}</div>;
}

export function Section(props: { children: React.ReactNode; className?: string }) {
    return (
        <div className={clsx(props.className)}>
            <div className="max-w-[1200px] mx-auto">
                <div className="mx-4">{props.children}</div>;
            </div>
        </div>
    );
}
