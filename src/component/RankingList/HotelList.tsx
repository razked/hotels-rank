import React, { useMemo } from "react";
import { Grid, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import map from "lodash/map";
import { Hotel } from "@/types/types";
import HotelCard from "./HotelCard";
import groupBy from "lodash/groupBy";

const MotionGrid = motion(Grid);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

type HotelListProps = {
  hotels: Hotel[];
  groupedByBrand?: boolean;
  brands?: Record<string, string>;
};

const HotelList: React.FC<HotelListProps> = ({
  hotels,
  groupedByBrand = false,
  brands = {},
}) => {
  if (groupedByBrand) {
    const groupedHotels: Record<string, Hotel[]> = useMemo(() => {
      return groupBy(hotels, "brand_id");
    }, [hotels]);

    return (
      <>
        {map(groupedHotels, (hotels, brandId) => (
          <Box key={brandId} mb={8}>
            <Text fontSize="sm" color="gray" mb={4}>
              {brands[brandId] || "Brand Not Assigned"}
            </Text>
            <MotionGrid
              templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
              gap={4}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {map(hotels, (hotel) => (
                <motion.div key={hotel.id} variants={itemVariants}>
                  <HotelCard data={hotel} />
                </motion.div>
              ))}
            </MotionGrid>
          </Box>
        ))}
      </>
    );
  }

  return (
    <MotionGrid
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={4}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {map(hotels, (hotel) => (
        <motion.div key={hotel.id} variants={itemVariants}>
          <HotelCard data={hotel} />
        </motion.div>
      ))}
    </MotionGrid>
  );
};

export default HotelList;
