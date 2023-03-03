import React from 'react';

interface ProjectProps {
    title: string;
    desc: string;
    img: string;
    link?: string;
}

function ProjectCard(props: ProjectProps) {
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </>
    );
}

export function Project(props: ProjectProps) {
    return props.link ? (
        <a href={props.link}>
            <ProjectCard {...props} />
        </a>
    ) : (
        <div>
            <ProjectCard {...props} />
        </div>
    );
}
