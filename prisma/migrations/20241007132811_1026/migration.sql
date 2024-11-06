-- AddForeignKey
ALTER TABLE "tbl_player_researches" ADD CONSTRAINT "tbl_player_researches_reference_player_reserach_type_fkey" FOREIGN KEY ("reference_player_reserach_type") REFERENCES "tbl_player_research_types"("reference") ON DELETE RESTRICT ON UPDATE CASCADE;
