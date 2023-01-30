import React from "react";
import Link from "next/link";
import Image from "next/image";
const ProjectCard = ({ project }) => {
  const { picDescription, picture, slug } = project.fields;
  return (
    <div className="card">
      <Image 
      src={`https:${picture.fields.file.url}`}
      width={picture.fields.file.details.image.width}
      height={picture.fields.file.details.image.height}

      />
      <div>
        <h4> {picDescription}</h4>
      </div>
      <div>
        <Link href={`/projectPics/${slug}`}> 
        Pic
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
