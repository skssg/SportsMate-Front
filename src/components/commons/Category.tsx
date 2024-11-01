import React from 'react'
import { Button, ConfigProvider, Flex } from 'antd';
import { useResponsive } from 'antd-style';
import "../../styles/commons/category.css"

const Category = () => {
  const { xxl } = useResponsive();

  return (
    <div className='category-div'>
      <ConfigProvider componentSize={xxl ? 'middle' : 'small'}></ConfigProvider>
        <Flex vertical gap="middle">
          <Flex gap="middle" wrap>
            <Button color="default" variant="text">
              축구
            </Button>
            <Button color="default" variant="text">
              풋살
            </Button>
            <Button color="default" variant="text">
              야구
            </Button>
            <Button color="default" variant="text">
              농구
            </Button>
          </Flex>
        </Flex>
    </div>
  )
}

export default Category