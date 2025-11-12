import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/Game-Grid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState("");
  const [searchText, setSearchText] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setSearchText(searchText)} />
      </GridItem>
      <Show>
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
          <Flex>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={selectedPlatform}
                onSelectPlatform={(platform) => setSelectedPlatform(platform)}
              />
            </Box>
            <SortSelector
              sortOrder={sortOrder}
              onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)}
            />
          </Flex>
        </Box>
        <GameGrid
          searchText={searchText}
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          sortOrder={sortOrder}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
