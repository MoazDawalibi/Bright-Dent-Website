import React, { useState, ReactNode } from 'react';
import type { DrawerProps } from 'antd';
import {  Drawer, Space } from 'antd';

interface WithDrawerProps {
  button: React.ReactNode;
  children: ReactNode;
  title:string;
  className?:string
}

const WithDrawer: React.FC<WithDrawerProps> = ({ button, children,title ="Basic Drawer",className }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('right');



  return (
    <>
      <Space>
        {React.cloneElement(button as React.ReactElement, {
          onClick: () => setOpen(true),
        })}
      </Space>
      <Drawer
        title={title}
        placement={placement}
        closable={false}
        onClose={() => setOpen(false)}
        open={open}
        key={placement}
        width={250}
      >
        <div className={className}>
        {children}

        </div>
      </Drawer>
    </>
  );
};

export default WithDrawer;
