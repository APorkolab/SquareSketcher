package com.squaresketcher;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pixel-art")
public class PixelArtController {

    private final PixelArtRepository repository;

    public PixelArtController(PixelArtRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public PixelArt save(@RequestBody PixelArt pixelArt) {
        return repository.save(pixelArt);
    }

    @GetMapping
    public List<PixelArt> getAll() {
        return repository.findAll();
    }
}
