import React from 'react';
import PropTypes from 'prop-types';

//components/ui
import { Tab, BlogList } from 'components';

const BlogsTab = ({ blogs }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex">
        <Tab name="Blogs" status={true} />
      </div>
      <div
        className="bg-neutral-100 flex flex-col grow overflow-auto rounded px-1 md:px-2 lg:px-4 xl:px-6  py-1 md:py-2
                    scrollbar-thin scrollbar-thumb-purple-700 scrollbar-track-blue-300"
      >
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
};

BlogsTab.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default BlogsTab;
