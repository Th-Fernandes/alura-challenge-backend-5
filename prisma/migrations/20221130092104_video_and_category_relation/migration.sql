-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_video" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "categoryId" INTEGER DEFAULT 1,
    CONSTRAINT "video_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_video" ("description", "id", "title", "url") SELECT "description", "id", "title", "url" FROM "video";
DROP TABLE "video";
ALTER TABLE "new_video" RENAME TO "video";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
